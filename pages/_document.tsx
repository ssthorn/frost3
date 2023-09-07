import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Nav />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
