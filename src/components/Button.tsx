import React from 'react'
import styled from 'styled-components'

import { lightGreyColor, darkRedColor } from 'app/GlobalStyle'

const Button = ({ danger, className, ...props }: any) => (
  <button className={`${className} ${danger ? 'danger' : ''}`} {...props} />
)

export default styled(Button)`
  border: 1px solid ${lightGreyColor};
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.5rem 1rem;

  &.danger {
    border-color: ${darkRedColor};
    color: ${darkRedColor};
  }
`
