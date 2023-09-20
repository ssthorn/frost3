import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import About from '../components/About'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Success from '../components/Success'
import Community from '../components/Community'
import Contact from '../components/Contact'

import TestHero from '../components/TestHero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <TestHero />
      <div className='max-w-[100vw] px-6 pb-16'>
      
      {/* <About /> */}
      <Carousel />
      <Services />
      <Success />
      <Community />
      <Contact />
      </div>
    </main>
  )
}
