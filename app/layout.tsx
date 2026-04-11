import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FADES | Farmers Digital Ecosystem',
  description: 'Empowering Nigeria\'s Farmers. Digitally. Sustainably. At Scale.',
  icons: {
    icon: '/images/Fades Favicon.png',
    shortcut: '/images/Fades Favicon.png',
    apple: '/images/Fades Favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body>
        {children}
      </body>
    </html>
  )
}
