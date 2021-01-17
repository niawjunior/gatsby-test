import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { colors } from '../styles-config'

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: ${colors.blueAlpha};
  color: ${colors.textLightest};
  margin: 0 auto;
  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 100%;
    margin: 0 auto;

    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      flex-direction: column;
    }
  }

  & a {
    color: ${colors.textLightest};
    font-weight: bold;

    &:hover {
      border-bottom: 1px dotted ${colors.textLightestHover};
    }
  }

  .footer-col > p {
    margin: 0;
  }
  .footer-title {
    margin: 0 0 1rem;
  }

  .footer-item {
    padding: 0.25rem 0;
    color: ${colors.textLightest};
  }

  .footer-heart {
    color: ${colors.heartFooter};
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: ${colors.textLightest};
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
    }
  }
`

const Footer = () => {
  const { authorName, siteTitle, facebookPage } = useSiteMetadata()
  return (
    <FooterWrapper>
      <nav>
        <div className="footer-col">
          <p className="footer-title">
            {authorName} © {new Date().getFullYear()}
          </p>
          <p className="footer-item-text">
            Made with{' '}
            <span role="img" aria-label={`Icon love`}>
              ❤️
            </span>{' '}
            by{' '}
            <a
              className="footer-link"
              href={facebookPage}
              rel="noopener noreferrer"
              target="_blank"
            >
              {siteTitle}
            </a>
          </p>
        </div>
      </nav>
    </FooterWrapper>
  )
}

export default Footer
