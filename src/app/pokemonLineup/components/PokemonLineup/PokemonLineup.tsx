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
        <p className="no-pokemons">No pokemons in lineup</p>
      )}
    </div>
  )
}

const PokemonLineupHeader = styled.h3`
  margin: 0 0 0.75rem;
  text-align: center;
`

const PokemonLineupContainer = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 2%;
  grid-row-gap: 0.75rem;
`

export default styled(PokemonLineup)`
  background: ${lightPinkColor};
  border-radius: ${smallRadius};
  padding: 0.75rem;
  overflow: hidden;

  .no-pokemons {
    font-size: 0.85rem;
    margin-bottom: 0;
    text-align: center;
  }
`
