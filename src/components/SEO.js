import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-config'

const SEO = props => {
  const { isBlogPost, path = '', lang = 'th' } = props
  const {
    siteTitle,
    siteUrl,
    siteCover,
    siteDescription,
    facebookAppID,
  } = useSiteMetadata()

  const title = props.title
    ? `${props.title} | ${siteTitle}`
    : `${siteTitle} - ${siteDescription}`
  const formatedSiteUrl = siteUrl.endsWith('/')
    ? siteUrl.substring(0, siteUrl.length - 1)
    : siteUrl
  const imagePath = props.imageShare || props.cover || withPrefix(siteCover)
  const image = `${formatedSiteUrl}${imagePath}`
  const description = props.description || siteDescription

  return (
    <Helmet title={title}>
      {/* General tags */}
      <html lang={lang} />
      <meta name="description" content={description} />
      <link rel="canonical" href={formatedSiteUrl + withPrefix(path)} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={formatedSiteUrl + withPrefix(path)} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={facebookAppID} />
    </Helmet>
  )
}

export default SEO
