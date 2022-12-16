import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className ="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        Home
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        {/* TODO 
        Add links to like to know it, contact us for collaboration, etc?, about?
        */}
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline transition-colors duration-200 hover:text-blue-600"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
      <Link href="/about">about</Link>
    </section>
  )
}

export default Intro
