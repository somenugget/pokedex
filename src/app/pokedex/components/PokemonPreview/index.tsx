import { connect } from 'react-redux'

import PokemonPreview from './PokemonPreview'

const mapState = (state: any) => ({
  pokemon: state.pokemons.pokemons[state.pokemonPreview.pokemon],
})

export default connect(mapState)(PokemonPreview)
