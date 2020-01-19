type Pokemon = {
  name: string
}

type PokemonsStore = Array<Pokemon>

export default {
  name: 'pokemons',
  state: [],
  reducers: {
    setPokemons(
      _state: PokemonsStore,
      pokemons: Array<Pokemon>
    ): PokemonsStore {
      return pokemons
    },
  },
}
