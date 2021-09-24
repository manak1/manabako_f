import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:type" content="blog" />
          <meta property="og:url" content="https://manabako.vercel.app/" />
          <meta
            property="og:image"
            content="https://manabako.vercel.app/ogp.png"
          />
          <meta property="og:description" content="manakiの質問箱！なんでも気軽に質問してね！" />
          <meta property="og:site_name" content="manabako" />
          <meta property="og:locale" content="ja_JP" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="manabako" />
          <meta name="twitter:site" content="@mikeanakida" />
          <meta name="twitter:image" content="https://manabako.vercel.app/ogp.png" />
          <meta name="twitter:url" content="https://manabako.vercel.app/" />
          <meta name="twitter:description" content="manakiの質問箱！なんでも気軽に質問してね！" />
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
