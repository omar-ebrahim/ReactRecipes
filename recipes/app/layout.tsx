import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../tailwind.css'
import Navbar from '../components/navbar/Navbar'
import SearchHeader from '@/components/searchheader/SearchHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipes App',
  description: 'Search for recipes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SearchHeader />

        {children}
      </body>
    </html>
  )
}
