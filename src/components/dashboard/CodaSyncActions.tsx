'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export function CodaSyncActions() {
  const [syncing, setSyncing] = useState(false);
  const [result, setResult] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning';
  } | null>(null);

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
          message: `✅ ${data.message}`,
          type: 'success',
        });
      } else {
        setResult({
          message: `❌ ${data.error || 'Sync failed'}`,
          type: 'error',
        });
      }
    } catch (error) {
      setResult({
        message: '❌ Connection error',
        type: 'error',
      });
    } finally {
      setSyncing(false);
    }

    // Auto-hide after 10 seconds
    setTimeout(() => setResult(null), 10000);
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
          message: '⚠️ Coda not configured properly',
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
    <div className="space-y-3 pt-4 border-t border-border">
      <div className="flex gap-2">
        <Button
          onClick={handleSync}
          disabled={syncing}
          size="sm"
          className="flex-1"
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
        >
          Test
        </Button>
      </div>

      {result && (
        <div 
          className={`p-3 rounded-md flex items-start gap-2 text-sm ${
            result.type === 'success' ? 'bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300' :
            result.type === 'error' ? 'bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-300' :
            'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-800 dark:text-yellow-300'
          }`}
        >
          {result.type === 'success' && <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />}
          {result.type === 'error' && <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
          {result.type === 'warning' && <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
          <span className="flex-1">{result.message}</span>
        </div>
      )}
    </div>
  );
}

