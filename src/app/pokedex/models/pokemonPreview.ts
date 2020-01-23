import { RematchDispatch } from '@rematch/core'

type PokemonPreviewStore = {
  pokemon: string | null
  isLoading: boolean
}

const initialState: PokemonPreviewStore = { pokemon: null, isLoading: false }

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
    setIsLoading(
      state: PokemonPreviewStore,
      isLoading: boolean
    ): PokemonPreviewStore {
      return {
        ...state,
        isLoading,
      }
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    loadPokemon(name: string) {
      dispatch.pokemonPreview.setIsLoading(true)

      dispatch.pokemons
        .loadPokemon(name)
        // @ts-ignore
        .then(() => {
          dispatch.pokemonPreview.setPokemon(name)
        })
        .finally(() => {
          dispatch.pokemonPreview.setIsLoading(false)
        })
    },
  }),
}
