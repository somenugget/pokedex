import { connect } from 'react-redux'

import PokemonLineup from './PokemonLineup'

const mapState = ({ pokemonLineup, pokemons }: any) => {
  return {
    pokemons: pokemonLineup.lineup.map(
      (name: string) => pokemons.pokemons[name]
    ),
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    selectPokemon: dispatch.pokemonData.selectPokemon,
  }
}

export default connect(mapState, mapDispatch)(PokemonLineup)
