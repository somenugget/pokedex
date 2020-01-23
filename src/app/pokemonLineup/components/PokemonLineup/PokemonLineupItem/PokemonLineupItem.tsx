import React, { useCallback } from 'react'
import styled from 'styled-components'

import { Pokemon } from 'app/models/pokemons'

type PokemonLineupItemProps = {
  pokemon: Pokemon
  selectPokemon: (pokemonName: string) => void
  removePokemon: (pokemonName: string) => void
  className?: string
  isSelected?: boolean
}

const PokemonLineupItem = ({
  pokemon,
  selectPokemon,
  removePokemon,
  className,
  isSelected,
}: PokemonLineupItemProps) => {
  const selectCurrentPokemon = useCallback(() => {
    selectPokemon(pokemon.name)
  }, [pokemon.name])

  const removeCurrentPokemon = useCallback(
    (e) => {
      e.stopPropagation()
      removePokemon(pokemon.name)
    },
    [pokemon.name]
  )

  return (
    <div
      className={`${className} ${isSelected && 'is-selected'}`}
      onClick={selectCurrentPokemon}
    >
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h5>{pokemon.name}</h5>

      <button onClick={removeCurrentPokemon} type="button">
        remove
      </button>
    </div>
  )
}

export default styled(PokemonLineupItem)`
  background: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;

  &.is-selected {
    box-shadow: 2px 2px 2px #ddd;
  }

  h5 {
    margin: 0.5rem 1rem 1rem;
  }
`
