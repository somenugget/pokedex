import pokeapiClient from './pokeapiClient'

const getPokemon = (name: string): Promise<Record<string, string>> => {
  return pokeapiClient.getPokemonByName(name)
}

export default getPokemon
