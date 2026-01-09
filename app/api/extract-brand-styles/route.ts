import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = body.url;
    const prompt = body.prompt;

    console.log('[extract-brand-styles] Extracting brand styles for:', url);
    console.log('[extract-brand-styles] User prompt:', prompt);

    // Firecrawl API usage disabled by user request. Returning mock branding data.
    const brandingData = {
      name: url.split('//')[1]?.split('/')[0] || "Brand",
      colors: {
        primary: "#3B82F6",
        secondary: "#1F2937",
        accent: "#8B5CF6"
      },
      typography: {
        fontFamily: "Inter, sans-serif",
        headingFont: "Geist, sans-serif"
      },
      logo: null,
      description: "Successfully generated mock branding guidelines."
    };

    console.log('[extract-brand-styles] Returning mock branding data (Firecrawl OFF)');

    // Return the branding data
    return NextResponse.json({
      success: true,
      url,
      styleName: brandingData.name || url,
      guidelines: brandingData,
    });

  } catch (error) {
    console.error('[extract-brand-styles] Error occurred:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to extract brand styles'
      },
      { status: 500 }
    );
  }
}
