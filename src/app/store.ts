import { init } from '@rematch/core'

import pokemons from './models/pokemons'
import pokemonPreview from './pokedex/models/pokemonPreview'
import pokemonLineup from './pokemonLineup/models/pokemonLineup'

const store = init({
  models: {
    pokemons,
    pokemonPreview,
    pokemonLineup,
  },
})

store.dispatch.pokemons.loadPokemons()

export default store
