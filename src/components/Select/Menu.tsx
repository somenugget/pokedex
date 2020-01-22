import React from 'react'
import { components } from 'react-select'

const ReactSelectMenu = components.Menu

const Menu = (props: any) => {
  if (props.selectProps.inputValue.length < 2) {
    return null
  }

  return <ReactSelectMenu {...props} />
}

export default Menu
