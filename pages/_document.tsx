import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav.jsx'

import TestNav from '../components/TestNav'

import Footer from '../components/Footer.jsx'
export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className='text-white'>
        
        <Main />
        <Nav />
        {/* <TestNav /> */}
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
