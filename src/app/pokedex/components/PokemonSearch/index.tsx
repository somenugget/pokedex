import React, { ReactElement, useMemo } from 'react'
import Select, { ActionMeta, OptionTypeBase, ValueType } from 'react-select'
import { connect } from 'react-redux'

import MenuList from './MenuList'

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

const components = { MenuList }

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
      components={components}
      onChange={setPreviewPokemon}
      placeholder="Find a pokemon!"
    />
  )
}

const mapState = (state: any) => ({
  pokemons: state.pokemons.list,
})

const mapDispatch = (dispatch: any) => ({
  setPreviewPokemon: (value: any) => {
    dispatch.pokemonPreview.loadPokemon(value?.value)
  },
})

export default connect(mapState, mapDispatch)(PokemonSearch)
