/**
 * Coda API Client
 * Handles communication with Coda workspace
 * NOW USES SAVED CONFIGURATION (not environment variables!)
 */

import { getCodaConfig } from './coda-storage';

const CODA_API_BASE = 'https://coda.io/apis/v1';

interface CodaRow {
  id: string;
  values: Record<string, any>;
  name: string;
  index: number;
}

export interface CodaBlogPost {
  rowId: string;
  title: string;
  slug: string;
  content: string;
  status: string;
  excerpt?: string;
  publishedDate?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

/**
 * Fetch rows from Coda table using saved configuration
 */
export async function getCodaRows(): Promise<CodaRow[]> {
  // Get saved configuration
  const config = await getCodaConfig();
  
  if (!config || !config.apiToken || config.selectedTables.length === 0 || config.selectedDocs.length === 0) {
    throw new Error('Coda configuration missing. Please configure Coda in the dashboard.');
  }

  const apiToken = config.apiToken;
  const docId = config.selectedDocs[0]; // Use first selected doc
  const tableId = config.selectedTables[0]; // Use first selected table

  const url = `${CODA_API_BASE}/docs/${docId}/tables/${tableId}/rows`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Coda API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.items || [];
}

/**
 * Transform Coda row to blog post format
 */
export function transformCodaRowToBlogPost(row: CodaRow): CodaBlogPost {
  const values = row.values;

  return {
    rowId: row.id,
    title: values.Title || values.title || 'Untitled',
    slug: values.Slug || values.slug || generateSlug(values.Title || values.title || 'untitled'),
    content: values.Content || values.content || '',
    status: mapCodaStatusToDirectus(values.Status || values.status),
    excerpt: values.Excerpt || values.excerpt,
    publishedDate: values['Published Date'] || values.publishedDate,
    tags: parseTags(values.Tags || values.tags),
    seoTitle: values['SEO Title'] || values.seoTitle,
    seoDescription: values['SEO Description'] || values.seoDescription,
  };
}

/**
 * Generate URL-friendly slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Map Coda status to Directus status
 */
function mapCodaStatusToDirectus(codaStatus: string): string {
  const status = (codaStatus || '').toLowerCase();
  
  if (status.includes('publish') || status.includes('ready')) {
    return 'published';
  }
  
  return 'draft';
}

/**
 * Parse tags from Coda (handles various formats)
 */
function parseTags(tags: any): string[] | undefined {
  if (!tags) return undefined;
  
  if (Array.isArray(tags)) {
    return tags.map(t => typeof t === 'string' ? t : t.name || t.value);
  }
  
  if (typeof tags === 'string') {
    return tags.split(',').map(t => t.trim()).filter(Boolean);
  }
  
  return undefined;
}

/**
 * Get blog posts ready to sync
 */
export async function getBlogPostsFromCoda(): Promise<CodaBlogPost[]> {
  try {
    const rows = await getCodaRows();
    const posts = rows.map(transformCodaRowToBlogPost);
    
    // Filter to only posts that are "Ready" or "Published"
    return posts.filter(post => 
      post.status === 'published' || 
      (post.title.trim() !== '' && post.content.trim() !== '')
    );
  } catch (error) {
    console.error('Error fetching posts from Coda:', error);
    throw error;
  }
}

/**
 * Test Coda connection using saved configuration
 */
export async function testCodaConnection(): Promise<boolean> {
  try {
    const config = await getCodaConfig();
    
    if (!config || !config.apiToken || config.selectedDocs.length === 0) {
      return false;
    }

    const response = await fetch(`${CODA_API_BASE}/docs/${config.selectedDocs[0]}`, {
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
      },
    });

    return response.ok;
  } catch {
    return false;
  }
}

