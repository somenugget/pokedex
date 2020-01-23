import { connect } from 'react-redux'

import PokemonPreview from './PokemonPreview'

const mapState = (state: any) => ({
  isLoading: state.pokemonPreview.isLoading,
  pokemon: state.pokemons.pokemons[state.pokemonPreview.pokemon],
})

export default connect(mapState)(PokemonPreview)
