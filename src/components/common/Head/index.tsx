import React from 'react'
import Head from 'next/head'

const siteTitle = 'manabako'

interface Props {
  title: string
  image: string
  url: string
}

const NextHead: React.VFC<Props> = ({ title, image, url }) => {
  return (
    <Head>
      <title>{`${title ? `${title} | ` : ''}${siteTitle}`}</title>
      <meta
        property="og:title"
        content={`${title ? `${title} | ` : ''}${siteTitle}`}
      />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mikeanakida" />
      <meta name="twitter:url" content={url} />
      <meta
        name="twitter:title"
        content={`${title ? `${title} | ` : ''}${siteTitle}`}
      />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  )
}

export default NextHead
