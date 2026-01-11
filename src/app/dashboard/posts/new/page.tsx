import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/posts">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Create New Post</h1>
          <p className="text-muted-foreground mt-1">
            Write and publish your blog post
          </p>
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Post Editor Coming Soon
          </h2>
          <p className="text-muted-foreground mb-6">
            For now, you can create posts directly in your Directus admin panel.
          </p>
          <div className="space-y-3">
            <a
              href="https://driftawave-directus.onrender.com/admin/content/blog_posts/+"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">
                Create Post in Directus →
              </Button>
            </a>
            <Link href="/dashboard/posts">
              <Button variant="outline" className="w-full">
                Back to Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

