import { directus, readItems } from '@/lib/directus';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Edit, Eye } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  published_date: string | null;
  date_created: string;
  date_updated: string | null;
}

export default async function PostsPage() {
  // Fetch all posts
  let posts: BlogPost[] = [];

  try {
    posts = await directus.request(
      readItems('blog_posts', {
        fields: ['id', 'title', 'slug', 'status', 'published_date', 'date_created', 'date_updated'],
        sort: ['-date_created'],
        limit: -1,
      })
    );
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-muted-foreground mt-1">
            Manage your blog content
          </p>
        </div>
        <Link href="/dashboard/posts/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Posts Table */}
      <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No posts yet</p>
            <Link href="/dashboard/posts/new">
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                Create your first post
              </Button>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Published Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {posts.map((post: BlogPost) => (
                  <tr key={post.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">
                          {post.title}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /{post.slug}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={post.status === 'published' ? 'default' : 'secondary'}
                      >
                        {post.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {post.published_date 
                        ? format(new Date(post.published_date), 'MMM d, yyyy')
                        : '—'
                      }
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {post.date_updated
                        ? format(new Date(post.date_updated), 'MMM d, yyyy')
                        : format(new Date(post.date_created), 'MMM d, yyyy')
                      }
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {post.status === 'published' && (
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                        <Link href={`/dashboard/posts/${post.id}`}>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Total: {posts.length} posts</span>
        <span>
          Published: {posts.filter((p: BlogPost) => p.status === 'published').length} | 
          Drafts: {posts.filter((p: BlogPost) => p.status === 'draft').length}
        </span>
      </div>
    </div>
  );
}

