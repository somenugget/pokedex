import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'

import './App.css'

const AppLink = styled.a`
  color: #61dafb;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </header>
    </div>
  )
}

export default App
