# FADES Website - AI Coding Agent Instructions

## Project Overview
FADES (Farmers Digital Ecosystem) is a React + TypeScript marketing website built with **Next.js 16 App Router**, showcasing a digital agricultural platform for Nigerian farmers. Currently running as a client-side SPA with React Router, with migration path to full Next.js routing.

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 16.0.7 (App Router) + React 19.2 + TypeScript
- **Build Tool**: Next.js with Turbopack (development server on port 3000)
- **Routing**: Currently React Router DOM (HashRouter) inside client component, future: Next.js App Router
- **Styling**: Tailwind CSS 3.4 (configured via `tailwind.config.ts`)
- **Animations**: Framer Motion for scroll reveals and transitions
- **Icons**: Lucide React
- **Fonts**: Next.js optimized fonts (Plus Jakarta Sans, Playfair Display)

### Directory Organization
```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── globals.css         # Global styles & Tailwind directives
│   └── [[...slug]]/        # Catch-all route for SPA
│       ├── page.tsx        # Server component entry
│       └── client.tsx      # Client component wrapper
├── pages/                  # Legacy route pages (Home, About, Ecosystem, Contact)
├── components/             # Shared components (Navbar, Footer, Reveal, UIComponents)
├── App.tsx                 # React Router setup (loaded client-side)
├── tailwind.config.ts      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
└── postcss.config.mjs      # PostCSS configuration
```

## Design System & Conventions

### Color Palette (Tailwind-extended)
Always use these semantic color classes defined in `tailwind.config.ts`:
- **Primary Green**: `fades-green` (#29875C) - CTAs, primary actions, brand highlights
- **Secondary Brown**: `fades-brown` (#8B5220) - agent/CoBEA features, accent
- **Background Light**: `fades-light` (#F5F9F7) - page backgrounds, soft sections
- **Dark Text**: `fades-dark` (#1A1A1A) - headings, primary text
- **Grey**: `fades-grey` (#4A4A4A) - secondary text

### Typography
- **Headings**: Use `font-serif` (Playfair Display) - applied to all h1-h6 via CSS
- **Body**: Use `font-sans` (Plus Jakarta Sans) - default
- **Hierarchy**: Large hero text starts at `text-5xl md:text-7xl`, sections at `text-4xl md:text-5xl`

### Component Patterns

#### Glass Morphism
Used in Navbar and hero cards. Custom CSS classes in `app/globals.css`:
```tsx
// Navbar when scrolled
className="glass-nav"  // backdrop-blur with semi-transparent white

// Hero cards
className="glass-card bg-white/10 border-white/10 backdrop-blur-md"
```

#### Animation with Reveal Component
Wrap content sections for scroll-triggered animations:
```tsx
<Reveal delay={0.2} direction="up">
  {/* content */}
</Reveal>
```
- **Delays**: Stagger items with incremental delays (0.1, 0.2, 0.3...)
- **Directions**: `up` (default), `down`, `left`, `right`
- **Usage**: Apply to each major content block, avoid nesting deeply

#### UI Components (`components/UIComponents.tsx`)
Custom shadcn-inspired components with FADES theming:
- **Button variants**: `default` (green), `secondary` (brown), `outline`, `ghost`, `link`
- **Button sizes**: `sm`, `md` (default), `lg`, `icon`
- **Cards**: Always use `Card` + `CardHeader` + `CardTitle` + `CardContent` structure
- **Badges**: `default` (green/10 bg), `secondary` (brown/10 bg), `outline`

Example:
```tsx
<Button size="lg" className="rounded-full">Download App</Button>
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## Development Workflow

### Local Development
```powershell
npm install
npm run dev  # Starts Next.js dev server on localhost:3000
```

### Environment Variables
- **API Key**: Set `NEXT_PUBLIC_GEMINI_API_KEY` in `.env.local` (currently placeholder)
- Access via `process.env.NEXT_PUBLIC_GEMINI_API_KEY` in client components

### Build & Deploy
```powershell
npm run build   # Creates optimized production build in .next/
npm run start   # Runs production server
```

## Key Implementation Details

### Routing
- **HashRouter** instead of BrowserRouter (for static hosting compatibility)
- **ScrollToTop**: Custom component in App.tsx resets scroll on route change
- Routes: `/`, `/about`, `/ecosystem`, `/contact`

### Navbar Behavior
- **Sticky** with `fixed w-full z-50`
- **Dynamic styling**: Transparent on hero, frosted glass (`glass-nav`) when scrolled
- **Mobile menu**: AnimatePresence wrapper for smooth enter/exit animations
- **Active link detection**: Uses `useLocation()` to style current page

### Page Structure Pattern
All pages follow this structure:
1. **Hero section** with dark background (`bg-fades-dark`) and large typography
2. **Content sections** alternating white (`bg-white`) and light (`bg-fades-light`)
3. **Reveal wrapping** for scroll animations
4. **Responsive grids** using `grid grid-cols-1 lg:grid-cols-2` patterns

### Custom Scrollbar
Defined globally in `app/globals.css` - green-gray theme matching brand

## Common Tasks

### Adding a New Page (Current SPA Mode)
1. Create `pages/NewPage.tsx` following existing page structure
2. Add route in `App.tsx`: `<Route path="/new" element={<NewPage />} />`
3. Add nav link in `components/Navbar.tsx` navLinks array
4. Use Reveal component for animations, Card components for content blocks

### Adding a New Page (Future Next.js App Router)
1. Create `app/new-page/page.tsx` as a Server Component
2. Use `'use client'` directive for interactive components
3. Use Next.js `Link` instead of React Router `Link`
4. Add nav link in `components/Navbar.tsx` navLinks array

### Creating Content Sections
Follow the established spacing rhythm:
- Section padding: `py-24` (96px vertical)
- Max width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid gaps: `gap-8` (32px) or `gap-12` (48px) for larger breakpoints

### Styling Interactive Elements
- **Hover states**: Add `hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
- **Focus states**: Components already include focus-visible rings (FADES green)
- **Transitions**: Always include `transition-all` or specific transition properties

## Project-Specific Notes

- **No backend**: Fully static site, any forms are presentational only
- **Image sources**: Uses Unsplash via direct URLs (no local assets currently)
- **No tests**: Project has no test configuration
- **TypeScript**: Configured with React JSX transform, bundler module resolution, path alias `@/*` maps to root

## Style Guidelines

- Prefer **rounded-full** for buttons, **rounded-xl** or **rounded-2xl** for cards
- Use **shadow-md**, **shadow-lg**, **shadow-xl** progression for elevation
- Icons: Always 1-2 size smaller than text (e.g., `w-5 h-5` with text-base)
- Maintain **serif for headings, sans for body** distinction
- Spacing: Use Tailwind's 4px scale (mb-4, mb-6, mb-8, etc.)

- Prefer **rounded-full** for buttons, **rounded-xl** or **rounded-2xl** for cards
- Use **shadow-md**, **shadow-lg**, **shadow-xl** progression for elevation
- Icons: Always 1-2 size smaller than text (e.g., `w-5 h-5` with text-base)
- Maintain **serif for headings, sans for body** distinction
- Spacing: Use Tailwind's 4px scale (mb-4, mb-6, mb-8, etc.)
