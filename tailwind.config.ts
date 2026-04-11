import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fades: {
          green: '#29875C',
          brown: '#8B5220',
          light: '#F5F9F7',
          dark: '#1A1A1A',
          grey: '#4A4A4A',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
