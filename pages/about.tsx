import Intro from '../components/intro'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Image from "next/image"
import bgImg from "../public/assets/blog/images/threeAndPumpkins.jpg";

const CURRENT_PAGE = "About"

export default function About() {
  return (
      <>
        <Layout>
          <Head>
            <title>DwellingOnTheRidge</title>
          </Head>
          <Navigation currentPage={CURRENT_PAGE}/>
          <Container>
          <Intro currentPage={CURRENT_PAGE}/>
          <section className="">
            {/* <Intro /> */}
            
            <div className="flex-wrap justify-between md:flex">
              <div className='md:w-3/5'>
                <Image src={bgImg} alt="image"/>
              </div>
              <div className='flex-col px-5 md:w-2/5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi harum, nostrum vel aliquam ullam eaque cum rerum saepe nam molestiae quod provident laboriosam qui dicta, neque officiis fuga mollitia nemo.
                Atque ipsa iste, cum facere explicabo odio nam excepturi amet modi, doloremque harum tempore repellendus odit consequatur commodi placeat nostrum fuga, corporis deleniti magni. Explicabo incidunt unde animi quasi enim!
                Itaque aperiam animi, laudantium nesciunt voluptate mollitia hic voluptatum, corrupti dicta incidunt corporis in! Amet qui quod fugiat labore tenetur neque laudantium quisquam maiores aut. Obcaecati beatae quasi debitis explicabo!
                Praesentium ut assumenda, quos aut impedit vel cumque distinctio quam illum porro, omnis totam iure, nesciunt consectetur. Dicta porro atque accusamus cum quae autem eius quas eaque ad, velit et.
                Atque temporibus sit illo corrupti vel quaerat quibusdam nulla quisquam eaque voluptatibus doloribus quos, dolorem explicabo enim magni ex minima fugiat asperiores ut, eum nihil culpa fugit? Modi, ullam neque.
                Minima, aut facere velit illum, commodi inventore aliquam tempore facilis quae, porro aspernatur ut tempora voluptatibus quo nam dolore eligendi animi necessitatibus impedit suscipit a? Id magnam inventore placeat ipsum!
                Unde eum recusandae accusantium, aliquam voluptates non tenetur distinctio, aut ex, pariatur laudantium atque deserunt sint error qui est asperiores maxime aperiam similique ea maiores quisquam. Impedit omnis corrupti laborum!
                Perferendis, nobis voluptates! Perspiciatis iste, quis enim quo quaerat maxime illum atque, mollitia, pariatur dolore adipisci officia quae. Mollitia vero consectetur molestiae eos ex laudantium exercitationem explicabo iusto quae deserunt!</p>
              </div>
            </div>
            {/* <h1 className="text-6xl font-bold md:text-4xl">RIGHT HERE ABOUT</h1> */}
        </section>
          </Container>
        </Layout>
      </>
       
        
  )
    
}
