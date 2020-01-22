import { RematchDispatch } from '@rematch/core'

import getAllPokemons from 'app/utils/getAllPokemons'

import getPokemon from '../utils/getPokemon'

export type Ability = {
  name: string
}

export type ConfiguredAbility = {
  ability: Ability
  is_hidden: boolean
}

export type Pokemon = {
  id: number
  name: string
  sprites: Record<'front_default', string>
  abilities: ConfiguredAbility[]
}

type ListPokemon = {
  name: string
}

type PokemonsStore = {
  list: ListPokemon[]
  pokemons: Record<string, Pokemon>
}

const initialState: PokemonsStore = {
  list: [],
  pokemons: {},
}

export default {
  name: 'pokemons',
  state: initialState,
  reducers: {
    setPokemonsList(
      state: PokemonsStore,
      pokemons: ListPokemon[]
    ): PokemonsStore {
      return {
        ...state,
        list: pokemons,
      }
    },
    setPokemon(state: PokemonsStore, pokemon: Pokemon): PokemonsStore {
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          [pokemon.name]: pokemon,
        },
      }
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    loadPokemon(name: string) {
      getPokemon(name).then((pokemon) => {
        dispatch.pokemons.setPokemon(pokemon)
      })
    },
    loadPokemons() {
      getAllPokemons().then((pokemons: ListPokemon[]) => {
        dispatch.pokemons.setPokemonsList(pokemons)
      })
    },
  }),
}
