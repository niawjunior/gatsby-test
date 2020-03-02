import React from 'react'
import styled from 'styled-components'
import ukFlag from './uk.png'
import thFlag from './th.png'
import tw from 'tailwind.macro'
const FlagImage = styled.img`
  ${tw`pr-2 pb-1 w-10`}
`

const Flag = ({ language }) => {
  const img = language === 'th' ? thFlag : ukFlag
  const alt = language === 'th' ? 'thai post' : 'english post'

  return <FlagImage src={img} alt={alt} />
}

export default Flag
