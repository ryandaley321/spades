# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build production bundle
npm start          # Start production server
npm run lint       # Run ESLint checks
npm run optimize-images  # Optimize images in public/images
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.3 with TypeScript
- **Styling**: Tailwind CSS v4 with inline styles for Figma fidelity
- **UI Libraries**: Radix UI, Lucide icons, class-variance-authority
- **Path Aliases**: `@/*` maps to `./src/*`

### Project Structure
```
/src
  /app              # Next.js app router pages
    /about          # About page
    /baytown        # Baytown location page
    /webster        # Webster location page with menu
    /contact        # Contact page
  /components       # Reusable React components
    /ui             # Base UI components (button, card, custom-button)
  /styles           # Design tokens and global styles
  /lib              # Utility functions (cn helper)
```

### Key Components
- **CustomButton**: Primary CTA component at `/src/components/ui/custom-button.tsx`
- **Header**: Fixed header (87px height) at `/src/components/Header.tsx`
- **Design Tokens**: Centralized at `/src/styles/design-tokens.ts`

## Design System

### Colors
- **Primary Dark**: #181510 (backgrounds, header)
- **Light Text**: #F7E7CE (primary text)
- **Gold Accent**: #CBB682 (primary buttons, borders)
- **Brown Accent**: #785F37 (secondary buttons, borders)

### Typography
- **Headings**: Montserrat (bold/semibold)
- **Body**: Poppins (regular/semibold)
- **Base Size**: 16px (body), 18px (subheadings), 24-28.8px (headings)

### Layout
- Fixed header height: 87px
- Hero section height: 1080px
- All sections use #181510 background
- Consistent border colors: #CBB682 (gold) or #785F37 (brown)

## Figma Integration

### MCP Server Requirements
- Figma desktop app must be running
- Server endpoint: `http://127.0.0.1:3845/sse`
- Use provided localhost assets directly, never placeholders

### Workflow
1. Use `mcp__figma-dev-mode-mcp-server__get_code` for component code
2. Call `mcp__figma-dev-mode-mcp-server__get_image` to see designs
3. Download assets: `curl -s "http://localhost:3845/assets/[hash].png" -o "public/[path]/[name].png"`
4. Preserve original Figma names (e.g., "spades champagne 1.png")
5. Replace localhost URLs with local paths

## Development Guidelines

### Component Usage
- Always use existing components from `/src/components/ui` when possible
- Maintain Figma design fidelity with exact matching
- Follow existing patterns for new components

### Asset Management
- Images in `/public/images`
- Icons in `/public/icons`
- Use OptimizedImage component when available
- Run `npm run optimize-images` for production builds

### Code Style
- TypeScript strict mode enabled
- ESLint with Next.js core-web-vitals config
- Path imports using `@/` alias
- Functional components with TypeScript interfaces

## SEO & Metadata
- Multi-location SEO optimization (Webster & Baytown)
- Structured metadata in layout.tsx
- Google site verification configured
- Open Graph and business schema markup