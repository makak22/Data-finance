import Head from 'next/head'
import Analytics from '../components/Analytics'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Cards from '../components/Cards';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Finance</title>
        <meta name="description" content="Landing Page Data finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />  
        <Hero />
        <Analytics /> 
        <Newsletter /> 
        <Cards />
        <Footer />
      </main>

    </div>
  )
}
