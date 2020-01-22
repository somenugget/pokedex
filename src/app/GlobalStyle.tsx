import { createGlobalStyle } from 'styled-components'

export const redColor = '#FFF' // '#ee4b38'

export const lightPinkColor = '#eee1df'

export const lightGreyColor = '#808080'

export const smallRadius = '0.5rem'

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    box-sizing: border-box;
  }
`
