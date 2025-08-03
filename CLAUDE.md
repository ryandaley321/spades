# Spades Poker House - Development Guide

## Design System
### Colors
- **Primary Dark**: #181510 (backgrounds, header)
- **Light Text**: #F7E7CE (primary text)
- **Gold Accent**: #CBB682 (primary buttons, borders)
- **Brown Accent**: #785F37 (secondary buttons, borders)

### Typography
- **Headings**: Montserrat (bold/semibold)
- **Body**: Poppins (regular/semibold)
- **Sizes**: 16px base, 18px subheadings, 24-28.8px headings

### Components
- CustomButton component for all CTAs
- Card components with custom border colors
- Consistent spacing patterns throughout

## Figma Integration Workflow
1. **Get Code**: Use `get_code` tool to extract component code
2. **Get Visual**: Always call `get_image` after to see the design
3. **Download Assets**: 
   ```bash
   curl -s "http://localhost:3845/assets/[hash].png" -o "public/[path]/[original-name].png"
   ```
4. **Keep Original Names**: Preserve Figma names (e.g., "spades champagne 1.png")
5. **Update Paths**: Replace localhost URLs with local paths

## Project Structure
```
/public
  /images    # Main images (hero, cards, etc.)
  /icons     # Social media and UI icons
/src/app
  page.tsx   # Landing page
```

## Key Implementation Notes
- Next.js 13+ with TypeScript
- Tailwind CSS with inline styles for exact Figma matching
- Fixed header at 87px height
- Hero section at 1080px height
- All sections use #181510 background
- Borders use #CBB682 (gold) or #785F37 (brown)

## Figma MCP Requirements
- Figma desktop app must be running
- Server at `http://127.0.0.1:3845/sse`
- Never use placeholder images if localhost source provided
- All assets should come from Figma payload

## MCP Servers
### Figma Dev Mode MCP Rules
- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets
- IMPORTANT: If the Figma Dev Mode MCP Server returns a localhost source for an image or an SVG, use that image or SVG source directly
- IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
- IMPORTANT: do NOT use or create placeholders if a localhost source is provided

## General Development Rules
- IMPORTANT: Always use components from `/src/components` when possible
- Prioritize Figma fidelity to match designs exactly
- Avoid hardcoded values, use design tokens from Figma where available
- Follow WCAG requirements for accessibility
- Add component documentation
- Place UI components in `/src/components`; avoid inline styles unless truly necessary