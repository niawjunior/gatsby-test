import React from 'react'

import PostsListItem from './PostsListItem'

const PostsList = ({ posts = [] }) => {
  return (
    <>
      {posts.map(post => {
        const props = {
          title: post.node.frontmatter.title,
          excerpt: post.node.excerpt,
          slug: post.node.frontmatter.slug,
          timeToRead: post.node.timeToRead,
          language: post.node.frontmatter.language || 'th',
          tags: post.node.frontmatter.tags || [],
        }
        return <PostsListItem key={props.slug} {...props} />
      })}
    </>
  )
}
export default PostsList
