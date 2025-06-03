import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Piazzolla, Inter, Montserrat, Outfit } from 'next/font/google'

// Configure fonts
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans', display: 'swap' })
const piazzolla = Piazzolla({ subsets: ['latin'], variable: '--font-piazzolla', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })

export const metadata: Metadata = {
  title: 'SLTverse Website - build the future together',
  description: 'The Official website of STLverse Company.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${piazzolla.variable} ${inter.variable} ${montserrat.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
