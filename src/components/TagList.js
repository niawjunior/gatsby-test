import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../styles-config'

const ListContainer = styled.div`
  display: inline;
  color: ${colors.postMetadata};
`

const TagListItemLink = styled(Link)`
  text-transform: uppercase;
  /* color: ${colors.postMetadata}; */
    font-size: 12px;
    color: #697980;
    border-radius: 2px;
    padding: 0.1rem 0.2rem 0.1rem 0.2rem;
    background-color: #eae8e8;
  &:not(:first-child) {
    margin-left: 0.3rem;
  }

  &:hover {
    border-bottom: 1px dotted ${colors.textLight};
  }
  &:before {
    content: '#';
  }
`

const TagListItem = styled.span`
  text-transform: uppercase;
  color: ${colors.postMetadata};
  &:not(:first-child) {
    margin-left: 0.3rem;
  }
  &:before {
    content: '#';
  }
`

class TagList extends React.Component {
  render() {
    const { tags, noLink } = this.props

    return (
      <ListContainer>
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              {!noLink && (
                <TagListItemLink to={`/tags/${tag}`}>{tag}</TagListItemLink>
              )}
              {noLink && <TagListItem to={`/tags/${tag}`}>{tag}</TagListItem>}
              {i < tags.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}

export default TagList
