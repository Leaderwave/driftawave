import { NextRequest, NextResponse } from 'next/server';
import { getBlogPostsFromCoda, testCodaConnection } from '@/lib/coda';
import { getCodaConfig } from '@/lib/coda-storage';

/**
 * Sync blog posts from Coda to Directus
 * POST /api/coda/sync
 * NOW USES SAVED CONFIGURATION (no env vars needed!)
 */
export async function POST(request: NextRequest) {
  try {
    // Get saved configuration
    const config = await getCodaConfig();
    
    if (!config || !config.apiToken || config.selectedTables.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Coda not configured. Please configure Coda first.',
      }, { status: 400 });
    }

    console.log('✅ Coda configuration loaded:', {
      docs: config.selectedDocs.length,
      tables: config.selectedTables.length,
      user: config.userName,
    });
    
    // Get posts from Coda (now uses saved config automatically!)
    const codaPosts = await getBlogPostsFromCoda();
    
    if (codaPosts.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No posts to sync',
        synced: 0,
      });
    }

    // Authenticate with Directus
    const directusLoginResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: process.env.DIRECTUS_ADMIN_EMAIL,
          password: process.env.DIRECTUS_ADMIN_PASSWORD,
        }),
      }
    );

    if (!directusLoginResponse.ok) {
      throw new Error('Failed to authenticate with Directus');
    }

    const { data: authData } = await directusLoginResponse.json();
    const accessToken = authData.access_token;

    // Sync each post to Directus
    const results = [];
    
    for (const post of codaPosts) {
      try {
        // Check if post already exists (by slug)
        const existingResponse = await fetch(
          `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/blog_posts?filter[slug][_eq]=${post.slug}`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          }
        );

        const existingData = await existingResponse.json();
        const existingPost = existingData.data?.[0];

        let result;

        if (existingPost) {
          // Update existing post
          const updateResponse = await fetch(
            `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/blog_posts/${existingPost.id}`,
            {
              method: 'PATCH',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: post.title,
                content: post.content,
                excerpt: post.excerpt,
                published_date: post.publishedDate,
                tags: post.tags,
                seo_title: post.seoTitle,
                seo_description: post.seoDescription,
                status: post.status,
              }),
            }
          );

          result = {
            slug: post.slug,
            action: 'updated',
            success: updateResponse.ok,
          };
        } else {
          // Create new post
          const createResponse = await fetch(
            `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/blog_posts`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: post.title,
                slug: post.slug,
                content: post.content,
                excerpt: post.excerpt,
                published_date: post.publishedDate || new Date().toISOString(),
                tags: post.tags,
                seo_title: post.seoTitle,
                seo_description: post.seoDescription,
                status: post.status,
              }),
            }
          );

          result = {
            slug: post.slug,
            action: 'created',
            success: createResponse.ok,
          };
        }

        results.push(result);
      } catch (error) {
        console.error(`Error syncing post ${post.slug}:`, error);
        results.push({
          slug: post.slug,
          action: 'error',
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    const successCount = results.filter(r => r.success).length;

    return NextResponse.json({
      success: true,
      message: `Synced ${successCount} of ${codaPosts.length} posts`,
      synced: successCount,
      results,
    });
  } catch (error) {
    console.error('Coda sync error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Sync failed',
      },
      { status: 500 }
    );
  }
}

/**
 * Test Coda connection
 * GET /api/coda/sync
 */
export async function GET() {
  try {
    const isConnected = await testCodaConnection();
    
    return NextResponse.json({
      success: true,
      connected: isConnected,
      message: isConnected ? 'Coda connection OK' : 'Coda not configured',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        connected: false,
        error: error instanceof Error ? error.message : 'Connection test failed',
      },
      { status: 500 }
    );
  }
}

