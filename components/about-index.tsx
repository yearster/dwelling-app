import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import Logo from './svgs/logo.svg'
import styles from "./about-index.module.css"
import Image from 'next/image'
import elisabethKitchen from "../public/assets/blog/images/beautifulwife.jpg";


const AboutIndex = () => {
  return (
    <section className ={`flex flex-col items-center justify-between md:flex-row ${styles.bgt}`}>
        <Image className="p-10 mb-3 rounded-t-full md:w-1/2" src={elisabethKitchen} alt="image"/>
        <div className={`flex justify-between md:w-1/2 mb-3 pr-4`}>
            <div className="flex items-center justify-center w-1/2 my-10">
              <h1 className={`h-full text-7xl ${styles.aboutHeight} md:pt-16`}>About me</h1>
            </div>
              
            
            <div className={`w-1/2 h-full my-10 py-2 pr-6 border-t-2 ${styles.b}`}>
              <p className={`mx-5 my-8 text-3xl ${styles.txclr}`}>I'm so happy you're here!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique magnam quaerat at nostrum quod earum, amet quo sunt recusandae laudantium. Sunt tempore enim magnam aliquid provident voluptate optio earum.
                Aut ea hic, exercitationem earum mollitia id corporis reiciendis quas libero, ullam cupiditate nesciunt. Provident sint, natus dicta earum laborum quibusdam fuga, iste quas eaque voluptatum hic consequuntur enim tempore.
                Eius sapiente, aut dignissimos cupiditate iste culpa aliquid necessitatibus ipsa ullam mollitia quibusdam! Soluta enim blanditiis non eum vero rerum consectetur dolorem repellat labore ipsa praesentium, sunt voluptatem consequuntur at!
                Autem, facilis in, doloremque incidunt illum nam consectetur cupiditate magnam quisquam commodi sint. Quas officiis, veritatis odio consequatur, hic possimus quibusdam, voluptatibus laborum animi omnis cumque perspiciatis beatae corporis minus.
                Sapiente quas delectus iusto assumenda. Quod inventore quas odit amet nobis cumque cupiditate temporibus ducimus possimus recusandae! Natus, ipsa! Inventore aspernatur eveniet ut reprehenderit neque reiciendis quas est, perspiciatis consequuntur
              </p>
            </div >
        </div>
    </section>
  )
}

export default AboutIndex
