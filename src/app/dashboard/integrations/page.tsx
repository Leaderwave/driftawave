import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodaSyncActions } from '@/components/dashboard/CodaSyncActions';
import { 
  Database, 
  Workflow, 
  Sparkles, 
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Settings,
  RefreshCw
} from 'lucide-react';
import { getCodaConfig } from '@/lib/coda-storage';
import Link from 'next/link';

interface IntegrationCardProps {
  name: string;
  description: string;
  status: 'connected' | 'disconnected' | 'pending';
  icon: React.ReactNode;
  url?: string;
  configUrl?: string; // NEW: For configure button
  children?: React.ReactNode; // NEW: For extra content
}

function IntegrationCard({ name, description, status, icon, url, configUrl, children }: IntegrationCardProps) {
  const statusConfig = {
    connected: {
      badge: <Badge variant="default" className="bg-green-500">Connected</Badge>,
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
    },
    disconnected: {
      badge: <Badge variant="destructive">Disconnected</Badge>,
      icon: <XCircle className="w-5 h-5 text-destructive" />
    },
    pending: {
      badge: <Badge variant="secondary">Pending Setup</Badge>,
      icon: <span className="w-5 h-5 text-muted-foreground">⏳</span>
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <div className="flex items-center gap-2">
          {statusConfig[status].icon}
          {statusConfig[status].badge}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      {/* Buttons row */}
      <div className="flex gap-2 mb-4">
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open {name.split(' ')[0]}
            </Button>
          </a>
        )}
        {configUrl && (
          <Link href={configUrl} className={url ? 'flex-1' : 'w-full'}>
            <Button variant="outline" size="sm" className="w-full">
              <Settings className="w-4 h-4 mr-2" />
              Configure
            </Button>
          </Link>
        )}
      </div>

      {/* Extra content (like sync button for Coda) */}
      {children}
    </div>
  );
}

export default async function IntegrationsPage() {
  // Check Coda configuration server-side
  const codaConfig = await getCodaConfig();
  const codaStatus = codaConfig ? 'connected' : 'pending';
  const connectedCount = 2 + (codaConfig ? 1 : 0); // Directus + Supabase + maybe Coda

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Integrations</h1>
        <p className="text-muted-foreground">
          Manage your connected services and automation tools
        </p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IntegrationCard
          name="Directus CMS"
          description="Headless CMS powering your content. REST & GraphQL API available."
          status="connected"
          icon={<Database className="w-6 h-6 text-primary" />}
          url="https://driftawave-directus.onrender.com/admin"
        />

        <IntegrationCard
          name="Supabase"
          description="PostgreSQL database storing all your content and data."
          status="connected"
          icon={<Database className="w-6 h-6 text-primary" />}
          url="https://supabase.com/dashboard/project/jfizzzwkruczgghptkmj"
        />

        <IntegrationCard
          name="Coda Integration"
          description="Sync drafts and structured data from your Coda workspace."
          status={codaStatus}
          icon={<FileSpreadsheet className={`w-6 h-6 ${codaStatus === 'connected' ? 'text-primary' : 'text-muted-foreground'}`} />}
          configUrl="/dashboard/coda/config"
        >
          {/* Sync actions only shown when connected */}
          {codaStatus === 'connected' && <CodaSyncActions />}
        </IntegrationCard>

        <IntegrationCard
          name="n8n Automation"
          description="Workflow automation connecting Directus, Claude, and Coda."
          status="pending"
          icon={<Workflow className="w-6 h-6 text-muted-foreground" />}
        />

        <IntegrationCard
          name="Claude MCP"
          description="AI-powered content authoring directly from Claude Desktop."
          status="pending"
          icon={<Sparkles className="w-6 h-6 text-muted-foreground" />}
        />
      </div>

      {/* Integration Status Summary */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Integration Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{connectedCount}</p>
            <p className="text-sm text-muted-foreground">Connected</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{5 - connectedCount}</p>
            <p className="text-sm text-muted-foreground">Pending Setup</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg">
            <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">5</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-accent/50 border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">📋 Next Steps</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {!codaConfig && (
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>Configure Coda integration (5 min)</span>
            </li>
          )}
          <li className="flex items-start gap-2">
            <span className="mt-0.5">•</span>
            <span>Set up n8n automation workflows (30 min)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5">•</span>
            <span>Configure Claude MCP for AI authoring (20 min)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

