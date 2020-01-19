import React from 'react'
import styled from 'styled-components'

import PokemonSearch from './components/PokemonSearch'

const Pokedex = () => {
  return (
    <div>
      <PokemonSearch />
    </div>
  )
}

Pokedex.propTypes = {}

export default styled(Pokedex)`
  border: 1px solid #000;
`
