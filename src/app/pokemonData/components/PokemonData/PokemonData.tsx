import React from 'react'
import styled from 'styled-components'

import { lightPinkColor, smallRadius } from 'app/GlobalStyle'
import { Pokemon } from 'app/models/pokemons'

import NameInput from './NameInput'
import AbilitiesSelect from './AbilitiesSelect'
import AbilitiesList from './AbilitiesList'

type PokemonDataProps = {
  className?: string
  pokemon?: Pokemon
  changeName: (value: string) => void
}

const PokemonData = ({ className, pokemon, changeName }: PokemonDataProps) => {
  if (!pokemon) {
    return null
  }

  return (
    <div className={className}>
      <NameInput name={pokemon.name} changeName={changeName} />

      <AbilitiesSelect />
      <AbilitiesList />
    </div>
  )
}

export default styled(PokemonData)`
  background: ${lightPinkColor};
  border-radius: ${smallRadius};
  padding: 0.75rem;

  input {
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    padding: 0.5rem;
    width: 100%;
  }
`
