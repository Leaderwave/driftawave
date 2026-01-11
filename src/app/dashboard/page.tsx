import { directus, readItems } from '@/lib/directus';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { FileText, FileCheck, FileClock, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  published_date: string | null;
  date_created: string;
}

export default async function DashboardPage() {
  // Fetch all posts
  let allPosts: BlogPost[] = [];

  try {
    allPosts = await directus.request(
      readItems('blog_posts', {
        fields: ['id', 'title', 'slug', 'status', 'published_date', 'date_created'],
        sort: ['-date_created'],
        limit: -1,
      })
    );
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  // Calculate stats
  const totalPosts = allPosts.length;
  const publishedPosts = allPosts.filter((p: BlogPost) => p.status === 'published').length;
  const draftPosts = allPosts.filter((p: BlogPost) => p.status === 'draft').length;

  // Get recent posts (top 5)
  const recentPosts = allPosts.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your content today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Posts"
          value={totalPosts}
          description="All blog posts"
          icon={FileText}
        />
        <StatsCard
          title="Published"
          value={publishedPosts}
          description="Live on your site"
          icon={FileCheck}
          trend={{ value: '+100%', positive: true }}
        />
        <StatsCard
          title="Drafts"
          value={draftPosts}
          description="Unpublished posts"
          icon={FileClock}
        />
        <StatsCard
          title="Total Views"
          value="0"
          description="Coming soon"
          icon={TrendingUp}
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Activity */}
      <RecentActivity posts={recentPosts} />
    </div>
  );
}

