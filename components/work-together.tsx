import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import Logo from './svgs/logo.svg'
import styles from "./work-together.module.css"
import Image from 'next/image'
import LetsWorkTogether from "../public/assets/blog/images/lets-work-together.jpeg";

const WorkTogether = () => {
  return (
    <section className ={`flex flex-col items-center justify-between md:flex-row mt-3 pt-4 ${styles.bg}`}>
        <Image className="pl-4 rounded-t-full md:w-1/2" src={LetsWorkTogether} alt="image"/>
        <div className="flex flex-col items-center justify-center mx-8 my-5 align-middle px-7"> 
            <h1 className="text-7xl">Lets Work Together</h1>
            <p className={`text-white uppercase border-b-2 ${styles.bottom} pb-5`}>If you'd like to sponsor a project or partner on a marketing campaign I would love to get in touch!</p>
            
            <div>
                
            </div>
            <button className={`px-8 py-2 font-bold text-white border rounded mt-6 ${styles.buttonboarder}`}>
                <a href="mailto:dwellingontheridge@gmail.com">dwellingontheridge@gmail.com</a>
            </button>
            
        </div>
    </section>
  )
}

export default WorkTogether
