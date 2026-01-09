# Open Lovable v3

## Overview
Open Lovable is an AI-powered website builder that can clone brand formats or re-imagine any website in seconds. It's powered by Firecrawl for web scraping capabilities.

## Project Architecture
- **Framework**: Next.js 15.4.3 with React 19
- **Build Tool**: Turbopack (Next.js built-in)
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **State Management**: Jotai (atomic state)
- **AI Integration**: AI SDK with support for multiple providers (Anthropic, OpenAI, Google, Groq)

## Directory Structure
- `app/` - Next.js App Router pages and API routes
  - `api/` - API endpoints
  - `builder/` - Website builder page
  - `generation/` - AI generation features
- `components/` - Reusable React components
- `atoms/` - Jotai state atoms
- `hooks/` - Custom React hooks
- `lib/` - Utility libraries
- `utils/` - Helper utilities
- `config/` - Configuration files
- `types/` - TypeScript type definitions
- `styles/` - Global styles
- `public/` - Static assets

## Development
- Run `npm run dev` to start the development server on port 5000
- The app is configured to run on `0.0.0.0:5000` for Replit compatibility

## Deployment
- Build: `npm run build`
- Start: `npm run start -p 5000 -H 0.0.0.0`
- Deployed using Replit's autoscale deployment

## Recent Changes
- 2026-01-09: Initial import and Replit environment setup
  - Configured Next.js to allow all dev origins for Replit proxy
  - Set up workflow for port 5000
  - Configured autoscale deployment
