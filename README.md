# FADES - Farmers Digital Ecosystem

A modern marketing website showcasing the Farmers Digital Ecosystem (FADES) platform for Nigerian farmers. Built with Next.js 16, React 19, and TypeScript, featuring smooth animations and a responsive design.

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.7 (App Router) + React 19.2
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.23
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans, Playfair Display (Next.js optimized fonts)
- **Routing**: React Router DOM 7.9 (HashRouter for static hosting)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Scroll-triggered reveals with Framer Motion
- **Glass Morphism UI**: Modern frosted glass effects on navbar and cards
- **Custom Design System**: FADES-branded color palette and components
- **SEO Optimized**: Next.js App Router with metadata support
- **Static Export Ready**: Configured for static hosting deployment

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── globals.css         # Global styles & Tailwind directives
│   └── [[...slug]]/        # Catch-all route for SPA
├── pages/                  # Route pages (Home, About, Ecosystem, Contact)
├── components/             # Shared components (Navbar, Footer, Reveal, UIComponents)
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── next.config.mjs         # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Fades Website"
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Create `.env.local` for environment variables:
```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Build

Create an optimized production build:
```bash
npm run build
```

Run the production server:
```bash
npm run start
```

## 🎨 Design System

### Color Palette
- **Primary Green** (`fades-green`): #29875C - CTAs and brand highlights
- **Secondary Brown** (`fades-brown`): #8B5220 - Accent elements
- **Background Light** (`fades-light`): #F5F9F7 - Section backgrounds
- **Dark Text** (`fades-dark`): #1A1A1A - Headings and primary text
- **Grey** (`fades-grey`): #4A4A4A - Secondary text

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Plus Jakarta Sans (sans-serif)

## 📄 Available Pages

- `/` - Home page with hero section and feature overview
- `/about` - About FADES and mission
- `/ecosystem` - Ecosystem details and stakeholders
- `/contact` - Contact information and form

## 🔧 Configuration

- **Tailwind Config**: See `tailwind.config.ts` for custom colors and theme
- **Next.js Config**: See `next.config.mjs` for build settings
- **TypeScript**: Configured with React JSX transform and path alias `@/*`

## 📝 Notes

- Currently using React Router DOM (HashRouter) for client-side routing
- Designed for static hosting compatibility
- All forms are presentational (no backend integration)
- Images sourced from Unsplash via direct URLs

## 📜 License

This project is private and proprietary.
