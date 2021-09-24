import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:type" content="blog" />
          <meta property="og:url" content='https://manabako.vercel.app/' />
          <meta property="og:image" content='https://manabako.vercel.app/ogp.png' />
          <meta property="og:site_name" content='manabako' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
