import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'
import Provider from '@/util/Providers'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Akavumo Listings',
  description: 'A properties listing application to find your next home.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
