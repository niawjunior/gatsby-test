import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import { colors } from '../styles-config'

const GlobalPageStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
styled.div.attrs(p => ({
  color: p.color,
}))

const Wrapper = styled.div`
  width: ${props => props.width || 440}px;
  height: ${props => props.height || 220}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  background-color: ${colors.socialMediaCardFilter};
  position: relative;
`

const Square = styled.div`
  width: ${props => props.width || 440}px;
  height: ${props => props.height || 220}px;
  position: absolute;
  outline: 3px solid #fff !important;
  outline-offset: -25px;
`

const Preview = styled.div`
  width: ${props => props.width || 440}px;
  height: ${props => props.height || 220}px;
  background-position: center;
  background-size: cover;
  background-image: url("${props => props.imgPreview}");
  position: absolute;
  opacity: 0.5;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.8rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  text-align: center;
  z-index: 1;
`

const SiteTitle = styled.p`
  font-size: 1rem;
  left: 60px;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  margin-bottom: 1rem;
  position: absolute;
  bottom: 15px;
  background-color: #ffffff;
  color: #000000;
  padding: 1px 5px 1px 5px;
  transform: translate(-50%);
  width: max-content;
`

const AuthorImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  border: 3px solid #ffffff;
`

const SubTitle = styled.div`
  font-weight: 700;
  margin-top: 10px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  z-index: 1;
`

const BlogPostShareImage = props => {
  const post = props.data.post
  const { width, height } = props.pageContext
  const heroImg = post.frontmatter.cover && post.frontmatter.cover.publicURL
  const { siteCover, authorAvatar, headerTitle } = useSiteMetadata()
  const { fixed } = useSiteImages(authorAvatar)
  const siteCoverPath = useSiteImages(siteCover).fluid.src
  const imgPreview = heroImg || withPrefix(siteCover)
  return (
    <Wrapper width={width} height={height}>
      <GlobalPageStyle />
      <SiteTitle>{headerTitle}</SiteTitle>
      <Title>{post.frontmatter.title}</Title>
      <SubTitle>
        <AuthorImg src={fixed.src} />
      </SubTitle>
      <Preview
        width={width}
        height={height}
        hero={heroImg}
        imgPreview={imgPreview}
        siteCover={siteCoverPath}
      />
      <Square width={width} height={height} />
    </Wrapper>
  )
}

export default BlogPostShareImage

export const pageQuery = graphql`
  query BlogPostShareImage($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        title
        cover {
          publicURL
        }
      }
    }
  }
`
