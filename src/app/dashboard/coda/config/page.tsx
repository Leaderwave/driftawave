'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  XCircle, 
  Loader2, 
  FileSpreadsheet,
  Table,
  AlertCircle,
  ArrowLeft,
  Save,
  Settings
} from 'lucide-react';
import Link from 'next/link';

interface CodaDoc {
  id: string;
  name: string;
  type: string;
  href: string;
}

interface CodaTable {
  id: string;
  name: string;
  parent: { id: string; name: string };
}

interface SavedConfig {
  hasToken: boolean;
  selectedDocs: string[];
  selectedTables: string[];
  userName?: string;
  lastUpdated?: string;
}

export default function CodaConfigPage() {
  const [savedConfig, setSavedConfig] = useState<SavedConfig | null>(null);
  const [showReconfigure, setShowReconfigure] = useState(false);
  
  // Setup flow states
  const [apiToken, setApiToken] = useState('');
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState<CodaDoc[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [tables, setTables] = useState<CodaTable[]>([]);
  const [selectedTables, setSelectedTables] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Load saved configuration on mount
  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/coda/config');
      const data = await response.json();

      if (data.success) {
        setSavedConfig(data.config);
      }
    } catch (error) {
      console.error('Error loading config:', error);
    }
  };

  // Test API token and load docs
  const testToken = async () => {
    if (!apiToken.trim()) {
      setSaveStatus('❌ Please enter an API token');
      return;
    }

    setLoading(true);
    setSaveStatus(null);
    
    try {
      const response = await fetch('/api/coda/docs', {
        headers: {
          'x-coda-token': apiToken,
        },
      });

      const data = await response.json();

      if (data.success) {
        setTokenValid(true);
        
        // Filter docs to only show those with tables (IN PARALLEL!)
        setSaveStatus(`🔍 Checking ${data.docs.length} documents for tables...`);
        
        // Check all docs in parallel using Promise.all
        const tableChecks = data.docs.map(async (doc: CodaDoc) => {
          try {
            const tablesResponse = await fetch(`/api/coda/tables?docId=${doc.id}`, {
              headers: {
                'x-coda-token': apiToken,
              },
            });
            const tablesData = await tablesResponse.json();
            
            return {
              doc,
              hasTables: tablesData.success && tablesData.tables.length > 0
            };
          } catch (error) {
            console.error(`Error checking tables for doc ${doc.id}:`, error);
            return { doc, hasTables: false };
          }
        });
        
        // Wait for all checks to complete
        const results = await Promise.all(tableChecks);
        
        // Filter to only docs with tables
        const docsWithTables = results
          .filter(result => result.hasTables)
          .map(result => result.doc);
        
        setDocs(docsWithTables);
        
        if (docsWithTables.length === 0) {
          setSaveStatus('⚠️ No documents with tables found. Create tables in your Coda docs first.');
        } else {
          setSaveStatus(`✅ Found ${docsWithTables.length} of ${data.docs.length} document(s) with tables`);
        }
      } else {
        setTokenValid(false);
        setSaveStatus('❌ Invalid API token');
      }
    } catch (error) {
      setTokenValid(false);
      setSaveStatus('❌ Connection failed');
    } finally {
      setLoading(false);
    }
  };

  // Select doc and load its tables
  const selectDoc = async (docId: string) => {
    // If clicking the same doc, deselect it
    if (selectedDoc === docId) {
      setSelectedDoc(null);
      setTables([]);
      setSelectedTables(new Set());
      setSaveStatus('ℹ️ Document deselected');
      return;
    }

    setSelectedDoc(docId);
    setLoading(true);
    setTables([]);
    setSelectedTables(new Set());
    
    try {
      const response = await fetch(`/api/coda/tables?docId=${docId}`, {
        headers: {
          'x-coda-token': apiToken,
        },
      });

      const data = await response.json();

      if (data.success) {
        if (data.tables.length === 0) {
          setSaveStatus('⚠️ This document has no tables');
          setSelectedDoc(null); // Deselect if no tables
        } else {
          setTables(data.tables);
          setSaveStatus(`✅ Found ${data.tables.length} tables in this doc`);
        }
      } else {
        setSaveStatus('❌ Failed to load tables');
      }
    } catch (error) {
      setSaveStatus('❌ Error loading tables');
    } finally {
      setLoading(false);
    }
  };

  // Toggle table selection
  const toggleTable = (tableId: string) => {
    const newSelected = new Set(selectedTables);
    if (newSelected.has(tableId)) {
      newSelected.delete(tableId);
    } else {
      newSelected.add(tableId);
    }
    setSelectedTables(newSelected);
  };

  // Save configuration
  const saveConfiguration = async () => {
    if (!apiToken || !selectedDoc || selectedTables.size === 0) {
      setSaveStatus('❌ Please complete all steps before saving');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('/api/coda/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiToken,
          selectedDocs: [selectedDoc],
          selectedTables: Array.from(selectedTables),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSaveStatus('✅ Configuration saved successfully!');
        // Reload config to show "Already Configured" view
        await loadConfig();
        setShowReconfigure(false);
      } else {
        setSaveStatus(`❌ ${data.error || 'Failed to save'}`);
      }
    } catch (error) {
      setSaveStatus('❌ Error saving configuration');
    } finally {
      setLoading(false);
    }
  };

  // If already configured and not showing reconfigure, show status page
  if (savedConfig?.hasToken && !showReconfigure) {
    const lastUpdated = savedConfig.lastUpdated 
      ? new Date(savedConfig.lastUpdated).toLocaleString() 
      : 'Unknown';

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Link 
              href="/dashboard/integrations" 
              className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Integrations
            </Link>
            <h1 className="text-3xl font-bold text-foreground mt-2">Coda Configuration</h1>
            <p className="text-muted-foreground mt-1">
              Your Coda workspace is connected and ready to sync
            </p>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="bg-green-500/10 p-3 rounded-lg">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                ✅ Coda is Connected!
              </h2>
              <p className="text-muted-foreground mb-4">
                {savedConfig.userName && `Configured for ${savedConfig.userName} • `}
                {savedConfig.selectedDocs.length} document(s) • {savedConfig.selectedTables.length} table(s) selected
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Last updated: {lastUpdated}
              </p>

              <div className="flex gap-3">
                <Link href="/dashboard/integrations">
                  <Button>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Go to Integrations & Sync
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => setShowReconfigure(true)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Reconfigure
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-accent/30 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3">What's Next?</h3>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li>1. Go to the <Link href="/dashboard/integrations" className="text-primary hover:underline">Integrations page</Link></li>
            <li>2. Click "Sync Now" in the Coda Sync section</li>
            <li>3. Your Coda content will be synced to Directus! 🎉</li>
          </ol>
        </div>
      </div>
    );
  }

  // Otherwise, show configuration flow
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link 
          href="/dashboard/integrations" 
          className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Integrations
        </Link>
        <h1 className="text-3xl font-bold text-foreground mt-2">Configure Coda Integration</h1>
        <p className="text-muted-foreground mt-1">
          Connect your Coda workspace in 4 simple steps
        </p>
      </div>

      {/* Status Messages */}
      {saveStatus && (
        <div 
          className={`p-4 rounded-md ${
            saveStatus.includes('✅') ? 'bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300' :
            saveStatus.includes('❌') ? 'bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-300' :
            'bg-blue-50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300'
          }`}
        >
          {saveStatus}
        </div>
      )}

      {/* Step 1: API Token */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h2 className="text-xl font-semibold text-foreground">Enter API Token</h2>
          {tokenValid && <Badge className="bg-green-500"><CheckCircle2 className="w-3 h-3 mr-1" />Connected</Badge>}
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="apiToken">Coda API Token</Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="apiToken"
                type="password"
                placeholder="coda_your_api_token_here"
                value={apiToken}
                onChange={(e) => {
                  setApiToken(e.target.value);
                  setTokenValid(null);
                  setDocs([]);
                  setTables([]);
                  setSelectedDoc(null);
                  setSelectedTables(new Set());
                }}
                disabled={loading}
                className="flex-1"
              />
              <Button onClick={testToken} disabled={loading || !apiToken.trim()}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Testing...
                  </>
                ) : (
                  'Test Connection'
                )}
              </Button>
            </div>
          </div>

          <div className="bg-accent/50 rounded-md p-4 text-sm">
            <p className="font-medium mb-2">How to get your API token:</p>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Go to <a href="https://coda.io/account" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">coda.io/account</a></li>
              <li>Click "Generate API token"</li>
              <li>Copy the token and paste it above</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Step 2: Select Document */}
      {tokenValid && docs.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h2 className="text-xl font-semibold text-foreground">Select Document</h2>
            {selectedDoc && <Badge className="bg-green-500"><CheckCircle2 className="w-3 h-3 mr-1" />Selected</Badge>}
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Click a document to select it. Click again to deselect. (Only showing documents with tables)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {docs.map((doc) => (
              <button
                key={doc.id}
                onClick={() => selectDoc(doc.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedDoc === doc.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50 bg-card'
                }`}
              >
                <div className="flex items-start gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{doc.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{doc.type}</p>
                  </div>
                  {selectedDoc === doc.id && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Select Tables - SIDE PANEL */}
      {selectedDoc && tables.length > 0 && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 animate-in fade-in"
            onClick={() => {
              setSelectedDoc(null);
              setTables([]);
              setSelectedTables(new Set());
            }}
          />
          
          {/* Side Panel */}
          <div className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-card border-l border-border z-50 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Select Tables</h2>
                </div>
                <button
                  onClick={() => {
                    setSelectedDoc(null);
                    setTables([]);
                    setSelectedTables(new Set());
                  }}
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                >
                  <XCircle className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {selectedTables.size > 0 && (
                <Badge className="bg-green-500">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  {selectedTables.size} selected
                </Badge>
              )}

              <p className="text-sm text-muted-foreground">
                Select which tables to sync from this document
              </p>

              {/* Tables List */}
              <div className="space-y-2">
                {tables.map((table) => (
                  <label
                    key={table.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTables.has(table.id)}
                      onChange={() => toggleTable(table.id)}
                      className="w-4 h-4"
                    />
                    <Table className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{table.name}</p>
                      <p className="text-xs text-muted-foreground">{table.parent.name}</p>
                    </div>
                    {selectedTables.has(table.id) && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    )}
                  </label>
                ))}
              </div>

              {/* Step 4: Save Configuration */}
              {selectedTables.size > 0 && (
                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Save Configuration</h2>
                  </div>

                  <div className="bg-accent/30 rounded-lg p-4">
                    <h3 className="font-medium text-foreground mb-2">Ready to save:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ API token validated</li>
                      <li>✓ 1 document selected</li>
                      <li>✓ {selectedTables.size} table(s) selected</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={saveConfiguration} 
                    disabled={loading}
                    size="lg"
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Configuration
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
