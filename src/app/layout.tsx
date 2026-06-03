import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/providers/AuthProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Estia — Your Personal OS',
  description: 'A personal operating system for ambitious people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable}`}
        style={{ fontFamily: 'var(--font-inter)', backgroundColor: 'var(--color-cream)', color: 'var(--color-warm-charcoal)' }}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}