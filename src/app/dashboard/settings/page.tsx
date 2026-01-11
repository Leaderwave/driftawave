import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Copy } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'Not configured';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your dashboard configuration and integrations
        </p>
      </div>

      {/* Directus Configuration */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Directus Configuration
            </h3>
            <p className="text-sm text-muted-foreground">
              Your headless CMS connection
            </p>
          </div>
          <Badge variant="default" className="bg-green-500">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Connected
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">API URL</p>
            <div className="flex items-center justify-between">
              <code className="text-sm font-mono text-foreground">{directusUrl}</code>
              <Button variant="ghost" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <a
            href="https://driftawave-directus.onrender.com/admin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full">
              Open Directus Admin Panel →
            </Button>
          </a>
        </div>
      </div>

      {/* Environment Status */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Environment Status
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Environment</span>
            <Badge variant="secondary">
              {process.env.NODE_ENV === 'production' ? 'Production' : 'Development'}
            </Badge>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Directus API</span>
            <Badge variant="default" className="bg-green-500">Connected</Badge>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Supabase DB</span>
            <Badge variant="default" className="bg-green-500">Connected</Badge>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">n8n Automation</span>
            <Badge variant="secondary">Pending</Badge>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Account Settings
        </h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Admin Email</p>
            <p className="text-sm text-muted-foreground">info@driftawave.com</p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-2">Password</p>
            <Button variant="outline" size="sm" disabled>
              Change Password (Coming Soon)
            </Button>
          </div>
        </div>
      </div>

      {/* Documentation Links */}
      <div className="bg-accent/50 border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">📚 Documentation</h3>
        <div className="space-y-2 text-sm">
          <Link 
            href="https://docs.directus.io" 
            target="_blank"
            className="block text-primary hover:underline"
          >
            → Directus Documentation
          </Link>
          <Link 
            href="https://supabase.com/docs" 
            target="_blank"
            className="block text-primary hover:underline"
          >
            → Supabase Documentation
          </Link>
          <Link 
            href="https://nextjs.org/docs" 
            target="_blank"
            className="block text-primary hover:underline"
          >
            → Next.js Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

