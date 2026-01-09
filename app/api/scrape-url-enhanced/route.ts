import { NextRequest, NextResponse } from 'next/server';

// Function to sanitize smart quotes and other problematic characters
function sanitizeQuotes(text: string): string {
  return text
    // Replace smart single quotes
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    // Replace smart double quotes
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    // Replace other quote-like characters
    .replace(/[\u00AB\u00BB]/g, '"') // Guillemets
    .replace(/[\u2039\u203A]/g, "'") // Single guillemets
    // Replace other problematic characters
    .replace(/[\u2013\u2014]/g, '-') // En dash and em dash
    .replace(/[\u2026]/g, '...') // Ellipsis
    .replace(/[\u00A0]/g, ' '); // Non-breaking space
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({
        success: false,
        error: 'URL is required'
      }, { status: 400 });
    }
    
    // Firecrawl API usage disabled by user request. Returning mock enhanced content.
    console.log('[scrape-url-enhanced] Returning mock response (Firecrawl OFF)');
    const mockTitle = "Enhanced Example Website";
    const mockDescription = "A sample website with enhanced mock scraping results.";
    const mockMarkdown = `# ${mockTitle}\n\nThis is enhanced mock content because Firecrawl is OFF.`;
    const formattedContent = `
Title: ${mockTitle}
Description: ${mockDescription}
URL: ${url}

Main Content:
${mockMarkdown}
    `.trim();

    return NextResponse.json({
      success: true,
      url,
      content: formattedContent,
      screenshot: null,
      structured: {
        title: mockTitle,
        description: mockDescription,
        content: mockMarkdown,
        url,
        screenshot: null
      },
      metadata: {
        scraper: 'mock-enhanced',
        timestamp: new Date().toISOString(),
        contentLength: formattedContent.length,
        cached: false
      },
      message: 'URL scraped successfully with mock provider (Firecrawl OFF)'
    });
    
  } catch (error) {
    console.error('[scrape-url-enhanced] Error:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}