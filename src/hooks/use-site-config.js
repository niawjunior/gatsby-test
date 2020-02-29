import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteCover
          authorName
          authorAvatarAdminOne
          authorDescriptionAdminOne
          authorAvatarAdminTwo
          authorDescriptionAdminTwo
          siteDescription
          disqusShortname
          disqusSiteUrl
          facebookAppID
          defaultLang
          headerTitle
          headerLinksIcon
          headerLinks {
            label
            url
          }
          footerLinks {
            sectionName
            links {
              label
              url
            }
          }
        }
      }
    }
  `)
  return result.site.siteMetadata
}

export default useSiteMetadata
