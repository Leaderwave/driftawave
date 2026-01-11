import { NextRequest, NextResponse } from 'next/server';
import { saveCodaConfig, getCodaConfig } from '@/lib/coda-storage';

/**
 * Save/Get Coda configuration
 * POST /api/coda/config - Save config
 * GET /api/coda/config - Get config
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apiToken, selectedDocs, selectedTables } = body;

    if (!apiToken) {
      return NextResponse.json(
        { success: false, error: 'API token required' },
        { status: 400 }
      );
    }

    // Validate token by testing connection
    const testResponse = await fetch('https://coda.io/apis/v1/whoami', {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });

    if (!testResponse.ok) {
      return NextResponse.json(
        { success: false, error: 'Invalid API token' },
        { status: 401 }
      );
    }

    const userData = await testResponse.json();

    // Save to storage
    await saveCodaConfig({
      apiToken,
      selectedDocs,
      selectedTables,
      userName: userData.name,
      lastUpdated: new Date().toISOString(),
    });
    
    return NextResponse.json({
      success: true,
      message: 'Configuration saved successfully',
      user: userData,
      config: {
        selectedDocs,
        selectedTables,
      },
    });
  } catch (error) {
    console.error('Error saving Coda config:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save configuration' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const config = await getCodaConfig();
    
    if (!config) {
      return NextResponse.json({
        success: true,
        config: {
          hasToken: false,
          selectedDocs: [],
          selectedTables: [],
        },
      });
    }

    return NextResponse.json({
      success: true,
      config: {
        hasToken: true,
        selectedDocs: config.selectedDocs,
        selectedTables: config.selectedTables,
        userName: config.userName,
        lastUpdated: config.lastUpdated,
      },
    });
  } catch (error) {
    console.error('Error getting Coda config:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get configuration' },
      { status: 500 }
    );
  }
}

