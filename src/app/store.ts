import { init } from '@rematch/core'

import pokemons from './models/pokemons'
import pokemonPreview from './pokedex/models/pokemonPreview'

const store = init({
  models: {
    pokemons,
    pokemonPreview,
  },
})

store.dispatch.pokemons.loadPokemons()

export default store
