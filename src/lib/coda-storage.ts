/**
 * Simple file-based storage for Coda configuration
 * TODO: Replace with database storage in production
 */

import fs from 'fs';
import path from 'path';

const CONFIG_FILE = path.join(process.cwd(), 'data', 'coda-config.json');

export interface CodaConfig {
  apiToken: string;
  selectedDocs: string[];
  selectedTables: string[];
  userName?: string;
  lastUpdated: string;
}

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

export async function saveCodaConfig(config: CodaConfig): Promise<void> {
  ensureDataDir();
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf-8');
}

export async function getCodaConfig(): Promise<CodaConfig | null> {
  try {
    if (!fs.existsSync(CONFIG_FILE)) {
      return null;
    }
    const data = fs.readFileSync(CONFIG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading Coda config:', error);
    return null;
  }
}

export async function deleteCodaConfig(): Promise<void> {
  if (fs.existsSync(CONFIG_FILE)) {
    fs.unlinkSync(CONFIG_FILE);
  }
}

