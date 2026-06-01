import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

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
  className={`${inter.variable} ${playfair.variable} font-sans bg-cream text-warm-charcoal antialiased`}
>
          {children}
      </body>
    </html>
  )
}