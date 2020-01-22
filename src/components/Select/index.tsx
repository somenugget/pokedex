import React from 'react'
import ReactSelect from 'react-select'

import Menu from './Menu'

const components = {
  Menu,
}

const Select = (props: any) => {
  return <ReactSelect components={components} {...props} />
}

export default Select
