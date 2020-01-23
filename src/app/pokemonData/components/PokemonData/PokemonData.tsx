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
  return (
    <div className={className}>
      {pokemon && pokemon.name ? (
        <>
          <NameInput name={pokemon.name} changeName={changeName} />

          <AbilitiesSelect />
          <AbilitiesList />
        </>
      ) : (
        <div className="pokemon-data-will-be-shown">
          Pokemon data will be shown here &nbsp;
          <span role="img" aria-label="smile">
            🙂
          </span>
        </div>
      )}
    </div>
  )
}

export default styled(PokemonData)`
  background: ${lightPinkColor};
  border-radius: ${smallRadius};
  padding: 0.75rem;

  ${NameInput} {
    margin-bottom: 0.5rem;
  }

  .pokemon-data-will-be-shown {
    font-size: 0.85rem;
    text-align: center;
  }
`
