import React from 'react'
import styled from 'styled-components'

import GlobalStyle, { redColor } from './GlobalStyle'
import Pokedex from './pokedex/Pokedex'
import PokemonLineup from './pokemonLineup/PokemonLineup'
import PokemonData from './pokemonData/PokemonData'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppSection>
          <PokemonLineup />
          <PokemonData />
        </AppSection>
        <AppSection>
          <Pokedex />
        </AppSection>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  background: ${redColor};
  border-radius: 20px;
  height: 90vh;
  display: flex;
  width: 90%;
  margin: 5vh auto 0;
  padding: 2%;
`

const AppSection = styled.section`
  width: 50%;
`

export default App
