import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import About from '../components/About'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Success from '../components/Success'
import Community from '../components/Community'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <About /> */}
      <Carousel />
      <Services />
      <Success />
      <Community />
      <Contact />
    </main>
  )
}
