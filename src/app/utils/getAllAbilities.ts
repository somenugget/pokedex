import pokeapiClient from './pokeapiClient'

const getAllAbilities = (): Promise<any[]> => {
  return pokeapiClient
    .getAbilitiesList()
    .then((response: any) => response.results)
}

export default getAllAbilities
