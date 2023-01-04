import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import Logo from './svgs/logo.svg'
import styles from './intro.module.css'


const Intro = ({currentPage}) => {
  return (
    <section className ="flex items-center justify-between mt-10 mb-10 md:flex-row md:mb-10">
      <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        {currentPage}
      </h1>
      <Logo className="w-1/3 h-1/3"></Logo>
      {/* <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline transition-colors duration-200 hover:text-blue-600"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4> */}
    </section>
  )
}

export default Intro
