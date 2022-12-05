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
          Få 500 kr å handle for i Tibber Store:  <a href="https://invite.tibber.com/se5xo620">se5xo620</a> 
        </p>
      </main>

    </div>
  )
}
