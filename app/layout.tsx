import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexusAI - Advanced AI Solutions Agency',
  description: 'Transform your business with cutting-edge AI solutions. NexusAI delivers custom AI implementations, automation, and intelligent systems.',
  keywords: 'AI, artificial intelligence, machine learning, automation, AI agency, AI solutions',
  authors: [{ name: 'NexusAI Team' }],
  openGraph: {
    title: 'NexusAI - Advanced AI Solutions Agency',
    description: 'Transform your business with cutting-edge AI solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusAI - Advanced AI Solutions Agency',
    description: 'Transform your business with cutting-edge AI solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}