import { connect } from 'react-redux'

import PokemonData from './PokemonData'

const mapState = (state: any) => {
  const pokemon = {
    ...state.pokemons.pokemons[state.pokemonData.selectedPokemon],
    ...state.pokemonData.pokemonChanges[state.pokemonData.selectedPokemon],
  }

  return {
    pokemon,
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    changeName: (value: string) => {
      dispatch.pokemonData.changePokemonName(value)
    },
  }
}

export default connect(mapState, mapDispatch)(PokemonData)
