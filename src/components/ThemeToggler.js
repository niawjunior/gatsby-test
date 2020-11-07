import React from 'react'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Switch from 'react-switch'

import moonIcon from '../../static/moon-icon.svg'
import sunIcon from '../../static/sun-icon.svg'

import styled from 'styled-components'

const SwitchToggle = styled.div`
  @media only screen and (max-width: 900px) {
    right: 70px;
  }

  position: absolute;
  z-index: 9999;
  margin-top: -43px;
  right: 10px;
`
const ThemeToggle = () => {
  return (
    <SwitchToggle>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Switch
            onColor="#222"
            offColor="#333"
            checkedIcon={<img src={moonIcon} alt="moon icon" />}
            uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
            boxShadow="0 0 2px 3px #B38CD9"
            activeBoxShadow="0 0 2px 3px #dfb3e6"
            onChange={e => toggleTheme(e ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
        )}
      </ThemeToggler>
    </SwitchToggle>
  )
}

export default ThemeToggle
