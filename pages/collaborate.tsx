import Intro from '../components/intro'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Image from "next/image"
import bgImg from "../public/assets/blog/images/threeAndPumpkins.jpg";
import WorkTogether from '../components/work-together'

const CURRENT_PAGE = "Collaborate"

export default function Collaborate() {
  return (
      <>
        <Layout>
          <Head>
            <title>DwellingOnTheRidge</title>
          </Head>
          <Navigation currentPage={CURRENT_PAGE}/>
          <Container>
            <Intro currentPage={CURRENT_PAGE}/>
          </Container>
          <WorkTogether/>
        </Layout>
      </>
       
        
  )
    
}
