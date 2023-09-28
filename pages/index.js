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
          Bli kunde hos Tibber innen 12. oktober og få 1000 kr å handle for i Tibber Store:  <a href="https://invite.tibber.com/xje5996b">https://invite.tibber.com/xje5996b</a> 
        </p>
      </main>

    </div>
  )
}
