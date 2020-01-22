import React from 'react'
import { connect } from 'react-redux'

import PokemonSearch from './PokemonSearch'

const mapState = (state: any) => ({
  pokemons: state.pokemons.list,
})

const mapDispatch = (dispatch: any) => ({
  setPreviewPokemon: (value: any) => {
    dispatch.pokemonPreview.loadPokemon(value?.value)
  },
})

export default connect(mapState, mapDispatch)(PokemonSearch)
