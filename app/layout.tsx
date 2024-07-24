import './global.css'
import type { Metadata } from 'next'
import { Karla } from "next/font/google";
import { Navbar } from './components/nav'
import { baseUrl } from './sitemap'

import { ScrollToTop } from './components/scroll-to-top';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "machadodev",
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'machadodev blog',
  openGraph: {
    title: 'machadodev portfolio',
    description: 'machadodev portfolio',
    url: baseUrl,
    siteName: 'machadodev portfolio',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black'
      )}
    >
      <body className={`${karla.className} antialiased max-w-xl mx-4 mt-8 lg:mx-auto`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
        <div className="mx-auto max-w-prose"><ScrollToTop /></div>
      </body>
    </html>
  )
}
