import { init } from '@rematch/core'

import pokemons from './models/pokemons'
import getAllPokemons from './utils/getAllPokemons'

const store = init({
  models: {
    pokemons,
  },
})

getAllPokemons().then((pokemons) => {
  store.dispatch({ type: 'pokemons/setPokemons', payload: pokemons })
})

export default store
