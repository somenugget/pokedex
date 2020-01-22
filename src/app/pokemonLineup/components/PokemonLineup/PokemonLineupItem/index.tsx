import { connect } from 'react-redux'

import PokemonLineupItem from './PokemonLineupItem'

const mapState = (state: any, { pokemon }: any) => ({
  isSelected: state.pokemonData.selectedPokemon === pokemon.name,
})

const mapDispatch = (dispatch: any) => ({
  selectPokemon: dispatch.pokemonData.selectPokemon,
})

export default connect(mapState, mapDispatch)(PokemonLineupItem)
