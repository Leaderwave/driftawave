import { NextRequest, NextResponse } from 'next/server';

const CODA_API_BASE = 'https://coda.io/apis/v1';

/**
 * List all docs in Coda workspace
 * GET /api/coda/docs
 */
export async function GET(request: NextRequest) {
  try {
    const apiToken = request.headers.get('x-coda-token');
    
    if (!apiToken) {
      return NextResponse.json(
        { success: false, error: 'API token required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${CODA_API_BASE}/docs`, {
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
      docs: data.items || [],
    });
  } catch (error) {
    console.error('Error fetching Coda docs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch docs' },
      { status: 500 }
    );
  }
}

