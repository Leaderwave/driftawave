import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle, Upload, Settings } from 'lucide-react';

export function QuickActions() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Link href="/dashboard/posts/new">
          <Button className="w-full" variant="default">
            <PlusCircle className="w-4 h-4 mr-2" />
            New Blog Post
          </Button>
        </Link>
        
        <Button className="w-full" variant="outline" disabled>
          <Upload className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
        
        <Link href="/dashboard/settings">
          <Button className="w-full" variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  );
}

