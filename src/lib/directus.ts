import { createDirectus, rest, readItems, readItem } from '@directus/sdk';

// Types for our Directus collections
interface BlogPost {
  id: string;
  status: 'draft' | 'published' | 'archived';
  date_created: string;
  date_updated: string | null;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string | null;
  published_date: string;
  tags: string[] | null;
  seo_title: string | null;
  seo_description: string | null;
}

// Define your Directus schema
interface DirectusSchema {
  blog_posts: BlogPost[];
}

// Create Directus client
const directus = createDirectus<DirectusSchema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL!
).with(rest());

// Export client and helpers
export { directus, readItems, readItem };
export type { BlogPost };

