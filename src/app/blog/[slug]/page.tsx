import { directus, readItems } from '@/lib/directus';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const revalidate = 60;

// Generate static params for all published posts
export async function generateStaticParams() {
  try {
    const posts = await directus.request(
      readItems('blog_posts', {
        filter: {
          status: { _eq: 'published' }
        },
        fields: ['slug']
      })
    );

    return posts.map((post) => ({
      slug: post.slug
    }));
  } catch (error) {
    console.error('Failed to fetch blog posts for static generation:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await directus.request(
    readItems('blog_posts', {
      filter: {
        slug: { _eq: slug },
        status: { _eq: 'published' }
      },
      limit: 1
    })
  );

  const post = posts[0];
  if (!post) return {};

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch single post by slug
  const posts = await directus.request(
    readItems('blog_posts', {
      filter: {
        slug: { _eq: slug },
        status: { _eq: 'published' }
      },
      limit: 1,
      fields: ['*']
    })
  );

  const post = posts[0];
  if (!post) notFound();

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <article>
        {/* Featured Image */}
        {post.featured_image && (
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.featured_image}`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-5xl font-sans font-bold mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
          <time dateTime={post.published_date} className="text-muted-foreground">
            {new Date(post.published_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-muted-foreground mb-8 font-serif italic">
            {post.excerpt}
          </p>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none font-serif
            prose-headings:font-sans prose-headings:font-bold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}

