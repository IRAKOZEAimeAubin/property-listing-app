import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'
import Provider from '@/util/Providers'
import {Navbar} from './_components/navbar'

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
        <Provider>
          <main className='min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#f2f1f9] to-[#a3a2b3] flex flex-col items-center p-3'>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
