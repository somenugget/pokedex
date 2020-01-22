import React, { ReactElement, useMemo } from 'react'
import { ActionMeta, OptionTypeBase, ValueType } from 'react-select'

import Select from 'components/Select'

type Pokemon = {
  name: string
}

type PokemonSearchProps = {
  pokemons: Array<Pokemon>
  setPreviewPokemon: (
    value: ValueType<OptionTypeBase>,
    actionMeta: ActionMeta
  ) => void
}

const PokemonSearch = ({
  pokemons,
  setPreviewPokemon,
}: PokemonSearchProps): ReactElement => {
  const options = useMemo(
    () =>
      pokemons.map(({ name }: Pokemon) => ({
        label: name,
        value: name,
      })),
    [pokemons.length]
  )

  return (
    <Select
      options={options}
      onChange={setPreviewPokemon}
      placeholder="Find a pokemon!"
    />
  )
}

export default PokemonSearch
