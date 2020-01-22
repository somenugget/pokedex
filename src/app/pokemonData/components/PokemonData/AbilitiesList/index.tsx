import { connect } from 'react-redux'

import AbilitiesList from './AbilitiesList'

const mapState = (state: any) => {
  const pokemon =
    state.pokemonData.pokemonChanges[state.pokemonData.selectedPokemon]

  return {
    abilities:
      pokemon && pokemon.abilities ? Object.values(pokemon.abilities) : [],
  }
}

const mapDispatch = () => ({})

export default connect(mapState, mapDispatch)(AbilitiesList)
