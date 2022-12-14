import { AppProps } from 'next/app'
import '../styles/index.css'

import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`{$inter.variable} font-sans`}>
      <p className={`{$inter.variable} font-sans`}>
        This is a test of the Inter font.
      </p>
      <Component {...pageProps} />
    </main>
  )
    
}
