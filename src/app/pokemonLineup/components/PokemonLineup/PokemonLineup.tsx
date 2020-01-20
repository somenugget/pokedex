import React from 'react'
import styled from 'styled-components'

import { Pokemon } from 'app/models/pokemons'
import { lightPinkColor } from 'app/GlobalStyle'

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
  display: flex;
`

export default styled(PokemonLineup)`
  background: ${lightPinkColor};
  border-radius: 0.5rem;
  padding: 0.75rem;

  ${PokemonLineupItem} {
    width: 30%;
  }
`
