import React from 'react'
import { components } from 'react-select'
import styled from 'styled-components'

import { lightGreyColor } from 'app/GlobalStyle'

const ReactSelectMenuList = components.MenuList

const MenuList = (props: any) => {
  if (props.selectProps.inputValue.length < 2) {
    return <MenuMessage>Type a pokemon name</MenuMessage>
  }

  return <ReactSelectMenuList {...props} />
}

const MenuMessage = styled.div`
  color: ${lightGreyColor};
  padding: 0.5rem 0.75rem;
`

export default MenuList
