import { StatsCard } from '@/components/dashboard/StatsCard';
import { TrendingUp, Eye, Users, Clock } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">
          Track your content performance and engagement
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Views"
          value="0"
          description="All-time page views"
          icon={Eye}
        />
        <StatsCard
          title="Visitors"
          value="0"
          description="Unique visitors"
          icon={Users}
        />
        <StatsCard
          title="Avg. Time"
          value="0m"
          description="Average read time"
          icon={Clock}
        />
        <StatsCard
          title="Growth"
          value="+0%"
          description="Month over month"
          icon={TrendingUp}
        />
      </div>

      {/* Coming Soon Card */}
      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Analytics Coming Soon
          </h2>
          <p className="text-muted-foreground mb-4">
            We're building detailed analytics to help you understand your content performance.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground text-left bg-muted/50 rounded-lg p-4">
            <p className="font-semibold text-foreground mb-2">Planned Features:</p>
            <ul className="space-y-1">
              <li>• Page views and unique visitors</li>
              <li>• Most popular posts</li>
              <li>• Traffic sources</li>
              <li>• Geographic distribution</li>
              <li>• Reading time analytics</li>
              <li>• Conversion tracking</li>
            </ul>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            In the meantime, consider integrating Google Analytics or Vercel Analytics
          </p>
        </div>
      </div>
    </div>
  );
}

