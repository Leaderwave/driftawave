import { NextRequest, NextResponse } from 'next/server';

const CODA_API_BASE = 'https://coda.io/apis/v1';

/**
 * List all tables in a Coda doc
 * GET /api/coda/tables?docId=xxx&token=xxx
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const docId = searchParams.get('docId');
    const apiToken = request.headers.get('x-coda-token');
    
    if (!apiToken || !docId) {
      return NextResponse.json(
        { success: false, error: 'API token and docId required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${CODA_API_BASE}/docs/${docId}/tables`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { success: false, error: `Coda API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      tables: data.items || [],
    });
  } catch (error) {
    console.error('Error fetching Coda tables:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tables' },
      { status: 500 }
    );
  }
}

