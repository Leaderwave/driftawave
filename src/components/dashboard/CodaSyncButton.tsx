'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, CheckCircle2, XCircle, AlertCircle, Settings } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function CodaSyncButton() {
  const [syncing, setSyncing] = useState(false);
  const [result, setResult] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning';
  } | null>(null);
  const [isConfigured, setIsConfigured] = useState(false);
  const [configInfo, setConfigInfo] = useState<string>('');

  // Check if Coda is configured on mount
  useEffect(() => {
    checkConfig();
  }, []);

  const checkConfig = async () => {
    try {
      const response = await fetch('/api/coda/config');
      const data = await response.json();
      
      if (data.success && data.config.hasToken) {
        setIsConfigured(true);
        setConfigInfo(data.config.userName ? `Configured for ${data.config.userName}` : 'Configured');
      }
    } catch (error) {
      console.error('Error checking config:', error);
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    setResult(null);

    try {
      const response = await fetch('/api/coda/sync', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          message: data.message,
          type: 'success',
        });
      } else {
        setResult({
          message: data.error || 'Sync failed',
          type: 'error',
        });
      }
    } catch (error) {
      setResult({
        message: 'Network error: Could not connect to sync API',
        type: 'error',
      });
    } finally {
      setSyncing(false);
      
      // Clear result after 10 seconds
      setTimeout(() => setResult(null), 10000);
    }
  };

  const testConnection = async () => {
    try {
      const response = await fetch('/api/coda/sync');
      const data = await response.json();
      
      if (data.connected) {
        setResult({
          message: '✅ Coda connection successful!',
          type: 'success',
        });
      } else {
        setResult({
          message: '⚠️  Coda not configured. Click "Configure Coda" to set up.',
          type: 'warning',
        });
      }
    } catch (error) {
      setResult({
        message: '❌ Could not test connection',
        type: 'error',
      });
    }
    
    setTimeout(() => setResult(null), 10000);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Coda Sync
          </h3>
          <p className="text-sm text-muted-foreground">
            Sync blog posts from your Coda workspace to Directus
          </p>
        </div>
        {isConfigured && (
          <Badge className="bg-green-500">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {configInfo}
          </Badge>
        )}
      </div>

      <div className="space-y-3">
        <Link href="/dashboard/coda/config">
          <Button variant="outline" className="w-full">
            <Settings className="w-4 h-4 mr-2" />
            Configure Coda
          </Button>
        </Link>

        <Button
          onClick={handleSync}
          disabled={syncing}
          className="w-full"
        >
          {syncing ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Syncing...
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync Now
            </>
          )}
        </Button>

        <Button
          onClick={testConnection}
          variant="ghost"
          size="sm"
          className="w-full"
        >
          Test Connection
        </Button>
      </div>

      {result && (
        <div 
          className={`mt-4 p-3 rounded-md flex items-start gap-2 ${
            result.type === 'success' ? 'bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300' :
            result.type === 'error' ? 'bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-300' :
            'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-800 dark:text-yellow-300'
          }`}
        >
          {result.type === 'success' && <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />}
          {result.type === 'error' && <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
          {result.type === 'warning' && <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
          <span className="text-sm flex-1">{result.message}</span>
        </div>
      )}
    </div>
  );
}

