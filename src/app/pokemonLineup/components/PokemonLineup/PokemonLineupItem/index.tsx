import React from 'react'
import styled from 'styled-components'

import { Pokemon } from 'app/models/pokemons'

type PokemonLineupItemProps = {
  pokemon: Pokemon
  className?: string
}

const PokemonLineupItem = ({ pokemon, className }: PokemonLineupItemProps) => {
  return (
    <div className={className}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h5>{pokemon.name}</h5>
    </div>
  )
}

export default styled(PokemonLineupItem)`
  width: 30%;
  border: 1px solid #000;
  height: 5rem;
`
