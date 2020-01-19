import React, { ReactElement, useMemo } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'

import MenuList from './MenuList'

type Pokemon = {
  name: string
}

type PokemonSearchProps = {
  pokemons: Array<Pokemon>
}

const components = { MenuList }

const PokemonSearch = ({ pokemons }: PokemonSearchProps): ReactElement => {
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
      placeholder="Find a pokemon!"
    />
  )
}

const mapState = (state: any) => ({
  pokemons: state.pokemons,
})

export default connect(mapState)(PokemonSearch)
