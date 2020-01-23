import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Pokemon } from 'app/models/pokemons'

import AddToLineupButton from './AddToLineupButton'

type PokemonPreviewProps = {
  pokemon?: Pokemon
  isLoading?: boolean
  className?: string
}

const nullPokemon = {
  id: 0,
  abilities: [],
  // eslint-disable-next-line @typescript-eslint/camelcase
  sprites: { front_default: '' },
  name: '',
}

const PokemonPreview = ({
  className,
  pokemon = nullPokemon,
  isLoading,
}: PokemonPreviewProps) => {
  const [imageIsLoading, setImageIsLoading] = useState(isLoading)
  const pokemonOrImageIsLoading = isLoading || imageIsLoading
  const isPokemonWithoutImage =
    pokemon && pokemon.id && pokemon.sprites && !pokemon.sprites.front_default

  useEffect(() => {
    if (isPokemonWithoutImage) {
      setImageIsLoading(false)
    } else if (isLoading) {
      setImageIsLoading(true)
    }
  }, [isLoading])

  const unsetImageIsLoading = () => setImageIsLoading(false)

  return (
    <div className={`${className} ${pokemonOrImageIsLoading && 'is-loading'}`}>
      <div className="loading-message">loading</div>

      <div className="pokemon-preview">
        {pokemon.sprites.front_default && (
          <img
            onLoad={unsetImageIsLoading}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        )}

        {pokemon.name && (
          <>
            <h3>{pokemon.name}</h3>

            <AddToLineupButton pokemonName={pokemon.name} />
          </>
        )}
      </div>
    </div>
  )
}

export default styled(PokemonPreview)`
  padding: 1rem;

  .loading-message {
    display: none;
  }

  &.is-loading {
    .loading-message {
      display: block;
    }

    .pokemon-preview {
      display: none;
    }
  }
`
