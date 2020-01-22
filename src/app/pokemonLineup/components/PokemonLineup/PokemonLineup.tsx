import React from 'react'
import styled from 'styled-components'

import { Pokemon } from 'app/models/pokemons'
import { lightPinkColor, smallRadius } from 'app/GlobalStyle'

import PokemonLineupItem from './PokemonLineupItem'

type PokemonLineupProps = {
  pokemons: Pokemon[]
  className?: string
}

const PokemonLineup = ({ pokemons, className }: PokemonLineupProps) => {
  return (
    <div className={className}>
      <PokemonLineupHeader>Pokemon Lineup</PokemonLineupHeader>

      {pokemons.length ? (
        <PokemonLineupContainer>
          {pokemons.map((pokemon: Pokemon) => (
            <PokemonLineupItem key={pokemon.name} pokemon={pokemon} />
          ))}
        </PokemonLineupContainer>
      ) : (
        <p>No pokemons in lineup</p>
      )}
    </div>
  )
}

const PokemonLineupHeader = styled.h2`
  margin-top: 0;
  text-align: center;
`

const PokemonLineupContainer = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 2%;
  grid-row-gap: 2%;
`

export default styled(PokemonLineup)`
  background: ${lightPinkColor};
  border-radius: ${smallRadius};
  padding: 0.75rem;
`
