import Intro from '../components/intro'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Image from "next/image"
import bgImg from "../public/assets/blog/images/threeAndPumpkins.jpg";

const CURRENT_PAGE = "Garden"

export default function Garden() {
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
                This is our garden page
              </div>
            </div>
            {/* <h1 className="text-6xl font-bold md:text-4xl">RIGHT HERE ABOUT</h1> */}
        </section>
          </Container>
        </Layout>
      </>
       
        
  )
    
}
