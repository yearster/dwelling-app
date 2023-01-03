import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import Logo from './svgs/logo.svg'
import Image from 'next/image'
import elisabethKitchen from "../public/assets/blog/images/beautifulwife.jpg";


const AboutIndex = () => {
  return (
    <section className ="flex items-center justify-between mt-10 mb-10 md:flex-row md:mb-10">
        <Image src={elisabethKitchen} alt="image"/>
        <div>
            Some test text
        </div>
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

export default AboutIndex
