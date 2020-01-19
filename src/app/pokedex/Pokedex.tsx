import React from 'react'
import styled from 'styled-components'

import { lightPinkColor } from 'app/GlobalStyle'

import PokemonSearch from './components/PokemonSearch'
import PokemonPreview from './components/PokemonPreview'

const Pokedex = (props: any) => {
  return (
    <div className={props.className}>
      <PokemonSearch />
      <br />
      <PokemonPreview />
    </div>
  )
}

Pokedex.propTypes = {}

export default styled(Pokedex)`
  background: ${lightPinkColor};
  border-radius: 0.5rem;
  padding: 1rem;
`
