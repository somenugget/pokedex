import pokeapiClient from './pokeapiClient'

const getAllPokemons = (): Promise<any[]> => {
  return pokeapiClient
    .getPokemonsList()
    .then((response: any) => response.results)
}

export default getAllPokemons
