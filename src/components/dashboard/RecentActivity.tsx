import Link from 'next/link';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  published_date: string | null;
  date_created: string;
}

interface RecentActivityProps {
  posts: BlogPost[];
}

export function RecentActivity({ posts }: RecentActivityProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Posts</h3>
        <Link 
          href="/dashboard/posts" 
          className="text-sm text-primary hover:underline"
        >
          View all
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/dashboard/posts/${post.id}`}
              className="block p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {post.published_date 
                        ? format(new Date(post.published_date), 'MMM d, yyyy')
                        : format(new Date(post.date_created), 'MMM d, yyyy')
                      }
                    </span>
                  </div>
                </div>
                <Badge 
                  variant={post.status === 'published' ? 'default' : 'secondary'}
                >
                  {post.status}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

