import React from 'react'
import styled from 'styled-components'
import Bio from './Bio'
import Content from './Content'
import Video from './Video'
const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-top: 1px solid #ececec;
`

const Article = ({ post }) => {
  return (
    <ArticleWrapper>
      <Content
        content={post.body}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        translations={post.frontmatter.translations}
      />
      {post.frontmatter.videoSrcURL && (
        <Video videoSrcURL={post.frontmatter.videoSrcURL} />
      )}
      <ArticleFooter>
        <Bio author={post.frontmatter.author} />
      </ArticleFooter>
    </ArticleWrapper>
  )
}

export default Article
