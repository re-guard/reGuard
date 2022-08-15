import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (<div>
      <Head>
        <title>reGuard</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
  </div>
  )
  
  
}

export default appWithTranslation(MyApp)
