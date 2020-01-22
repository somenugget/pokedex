import { RematchDispatch } from '@rematch/core'

import { Ability } from 'app/models/pokemons'
import getAllAbilities from 'app/utils/getAllAbilities'

type AbilitiesStore = {
  list: Ability[]
}

const initialState: AbilitiesStore = {
  list: [],
}

export default {
  name: 'abilities',
  state: initialState,
  reducers: {
    setAbilitiesList(
      state: AbilitiesStore,
      abilities: Ability[]
    ): AbilitiesStore {
      return {
        ...state,
        list: abilities,
      }
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    loadAbilities() {
      getAllAbilities().then((abilities: Ability[]) => {
        dispatch.abilities.setAbilitiesList(abilities)
      })
    },
  }),
}
