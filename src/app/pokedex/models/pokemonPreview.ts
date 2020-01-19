import { RematchDispatch } from '@rematch/core'

type PokemonPreviewStore = {
  pokemon: string | null
}

const initialState: PokemonPreviewStore = { pokemon: null }

export default {
  name: 'pokemonPreview',
  state: initialState,
  reducers: {
    setPokemon(
      state: PokemonPreviewStore,
      pokemon: string
    ): PokemonPreviewStore {
      return {
        ...state,
        pokemon,
      }
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    loadPokemon(name: string) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      dispatch.pokemons.loadPokemon(name).then(() => {
        dispatch.pokemonPreview.setPokemon(name)
      })
    },
  }),
}
