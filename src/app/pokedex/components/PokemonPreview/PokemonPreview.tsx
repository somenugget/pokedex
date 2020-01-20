import React from 'react'
import styled from 'styled-components'

import { Pokemon } from 'app/models/pokemons'

import AddToLineupButton from './AddToLineupButton'

type PokemonPreviewProps = {
  className?: string
  pokemon?: Pokemon
}

const PokemonPreview = ({ className, pokemon }: PokemonPreviewProps) => {
  if (!pokemon) {
    return null
  }

  return (
    <div className={className}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h3>{pokemon.name}</h3>

      <AddToLineupButton pokemonName={pokemon.name} />
    </div>
  )
}

export default styled(PokemonPreview)`
  padding: 1rem;
`
