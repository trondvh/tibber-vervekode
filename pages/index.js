import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tibber vervekode!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tibber vervekode" />
        <p className="description">
          Få 500 kr i rabatt:  <a href="https://invite.tibber.com/5f0ce4bd">5f0ce4bd</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
