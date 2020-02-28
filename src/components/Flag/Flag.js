import React from 'react'
import styled from 'styled-components'

import ukFlag from './uk.png'
import thFlag from './th.png'

const FlagImage = styled.img`
  padding-right: 0.5rem;
  padding-bottom: 0.2rem;
  width: 30px;
`

const Flag = ({ language }) => {
  const img = language === 'th' ? thFlag : ukFlag
  const alt = language === 'th' ? 'thai post' : 'english post'

  return <FlagImage src={img} alt={alt} className="flag" />
}

export default Flag
