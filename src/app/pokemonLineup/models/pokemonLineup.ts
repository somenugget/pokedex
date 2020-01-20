type PokemonLineupStore = {
  lineup: string[]
}

const initialState: PokemonLineupStore = { lineup: [] }

export default {
  name: 'pokemonLineup',
  state: initialState,
  reducers: {
    addPokemon(
      state: PokemonLineupStore,
      pokemonName: string
    ): PokemonLineupStore {
      return {
        ...state,
        lineup: [...new Set([...state.lineup, pokemonName])],
      }
    },
  },
}
