import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'modern-css-reset'
import './_app.scss'
import 'react-notifications/lib/notifications.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
