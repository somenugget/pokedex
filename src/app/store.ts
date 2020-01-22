import { init } from '@rematch/core'
import createRematchPersist, { getPersistor } from '@rematch/persist'

import pokemons from './models/pokemons'
import abilities from './models/abilities'
import pokemonPreview from './pokedex/models/pokemonPreview'
import pokemonLineup from './pokemonLineup/models/pokemonLineup'
import pokemonData from './pokemonData/models/pokemonData'

const persistPlugin = createRematchPersist({
  throttle: 500,
  blacklist: ['pokemonPreview'],
  version: 1,
})

const store = init({
  models: {
    pokemons,
    abilities,
    pokemonPreview,
    pokemonLineup,
    pokemonData,
  },
  plugins: [persistPlugin],
})

// Load the list of pokemons if they were not previously saved
getPersistor().subscribe(() => {
  if (store.getState().pokemons.list.length === 0) {
    store.dispatch.pokemons.loadPokemons()
  }

  if (store.getState().abilities.list.length === 0) {
    store.dispatch.abilities.loadAbilities()
  }
})

export default store
