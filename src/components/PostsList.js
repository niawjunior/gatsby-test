import React from 'react'

import PostsListItem from './PostsListItem'

const PostsList = ({ posts = [] }) => {
  const mapPost = posts
    .map(post => {
      const props = {
        title: post.node.frontmatter.title,
        excerpt: post.node.excerpt,
        slug: post.node.frontmatter.slug,
        date: post.node.frontmatter.date,
        timeToRead: post.node.timeToRead,
        language: post.node.frontmatter.language || 'th',
        tags: post.node.frontmatter.tags || [],
      }
      return props
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <>
      {mapPost.map(post => {
        return <PostsListItem key={post.slug} {...post} />
      })}
    </>
  )
}
export default PostsList
