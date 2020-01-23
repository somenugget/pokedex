import { ConfiguredAbility } from 'app/models/pokemons'

type SinglePokemonChanges = {
  name?: string
  abilities?: Record<string, ConfiguredAbility>
}

type PokemonDataStore = {
  selectedPokemon?: string
  pokemonChanges: Record<string, SinglePokemonChanges>
}

type SetIsHiddenPayload = {
  name: string
  isHidden: boolean
}

const initialState: PokemonDataStore = {
  selectedPokemon: undefined,
  pokemonChanges: {},
}

export default {
  name: 'pokemonData',
  state: initialState,
  reducers: {
    selectPokemon(
      state: PokemonDataStore,
      pokemonName: string
    ): PokemonDataStore {
      return {
        ...state,
        pokemonChanges: {
          ...state.pokemonChanges,
          [pokemonName]: {
            ...(state.pokemonChanges[pokemonName] || {}),
          },
        },
        selectedPokemon: pokemonName,
      }
    },
    changePokemonName(
      state: PokemonDataStore,
      pokemonName: string
    ): PokemonDataStore {
      if (!(state.selectedPokemon && pokemonName)) {
        return state
      }

      return {
        ...state,
        pokemonChanges: {
          ...state.pokemonChanges,
          [state.selectedPokemon]: {
            ...state.pokemonChanges[state.selectedPokemon],
            name: pokemonName,
          },
        },
      }
    },
    addAbility(state: PokemonDataStore, name: string): PokemonDataStore {
      if (!state.selectedPokemon) {
        return state
      }

      const selectedPokemonChanges = state.pokemonChanges[state.selectedPokemon]

      return {
        ...state,
        pokemonChanges: {
          ...state.pokemonChanges,
          [state.selectedPokemon]: {
            ...selectedPokemonChanges,
            abilities: {
              [name]: {
                // eslint-disable-next-line @typescript-eslint/camelcase
                is_hidden: false,
                ability: { name },
              },
              ...selectedPokemonChanges.abilities,
            },
          },
        },
      }
    },
    removeAbility(state: PokemonDataStore, name: string): PokemonDataStore {
      if (!state.selectedPokemon) {
        return state
      }

      const selectedPokemonChanges = state.pokemonChanges[state.selectedPokemon]
      const abilities = selectedPokemonChanges.abilities

      if (!abilities) {
        return state
      }

      delete abilities[name]

      return {
        ...state,
        pokemonChanges: {
          ...state.pokemonChanges,
          [state.selectedPokemon]: {
            ...selectedPokemonChanges,
            abilities: {
              ...abilities,
            },
          },
        },
      }
    },
    setIsHidden(
      state: PokemonDataStore,
      { name, isHidden }: SetIsHiddenPayload
    ): PokemonDataStore {
      if (!state.selectedPokemon) {
        return state
      }

      const selectedPokemonChanges = state.pokemonChanges[state.selectedPokemon]

      if (!(selectedPokemonChanges && selectedPokemonChanges.abilities)) {
        return state
      }

      return {
        ...state,
        pokemonChanges: {
          ...state.pokemonChanges,
          [state.selectedPokemon]: {
            ...selectedPokemonChanges,
            abilities: {
              ...selectedPokemonChanges.abilities,
              [name]: {
                ...selectedPokemonChanges.abilities[name],
                // eslint-disable-next-line @typescript-eslint/camelcase
                is_hidden: isHidden,
              },
            },
          },
        },
      }
    },
  },
}
