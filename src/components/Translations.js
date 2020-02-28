import React, { Fragment } from 'react'
import styled from 'styled-components'
import { colors } from '../styles-config'

const TranslationContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid ${colors.green};
  background-color: ${colors.green};
`

const InfoText = styled.span`
  color: ${colors.textLightest};
`

const TranslationLink = styled.a`
  color: ${colors.textLightest};
  text-decoration: underline;
`

const Translations = ({ translations }) => {
  return (
    <TranslationContainer>
      <InfoText>อ่านบทความนี้ ในเวอร์ชั่น ภาษา: </InfoText>
      {translations.map((translation, i) => {
        return (
          <Fragment key={`translation-${i}`}>
            <TranslationLink href={translation.link}>
              {translation.language}
            </TranslationLink>
            {i < translations.length - 1 ? ', ' : ''}
          </Fragment>
        )
      })}
    </TranslationContainer>
  )
}
export default Translations
