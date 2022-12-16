import { AppProps } from 'next/app'
import '../styles/index.css'
import { Cormorant }  from '@next/font/google'
import { Open_Sans } from '@next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const comorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={comorant.className}>
      <Component {...pageProps} />
    </main>
  )
    
}
