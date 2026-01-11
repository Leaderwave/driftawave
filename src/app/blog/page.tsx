import { directus, readItems } from '@/lib/directus';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  // Fetch published blog posts
  let posts: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string | null;
    published_date: string;
    tags: string[] | null;
  }> = [];

  try {
    posts = await directus.request(
      readItems('blog_posts', {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        sort: ['-published_date'],
        fields: [
          'id',
          'title',
          'slug',
          'excerpt',
          'featured_image',
          'published_date',
          'tags'
        ]
      })
    );
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-sans font-bold mb-12">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              {post.featured_image && (
                <div className="aspect-video relative">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.featured_image}`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-2xl font-sans font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                {post.excerpt && (
                  <p className="text-muted-foreground mb-4 font-serif">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <time dateTime={post.published_date}>
                    {new Date(post.published_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            No blog posts published yet. Check back soon!
          </p>
        </div>
      )}
    </main>
  );
}

