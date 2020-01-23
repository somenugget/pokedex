import { connect } from 'react-redux'

import PokemonLineupItem from './PokemonLineupItem'

const mapState = (state: any, { pokemon }: any) => ({
  isSelected: state.pokemonData.selectedPokemon === pokemon.name,
})

const mapDispatch = (dispatch: any) => ({
  selectPokemon: dispatch.pokemonData.selectPokemon,
  removePokemon: (pokemonName: string) => {
    dispatch.pokemonLineup.removePokemon(pokemonName)
    dispatch.pokemonData.selectPokemon(undefined)
  },
})

export default connect(mapState, mapDispatch)(PokemonLineupItem)
