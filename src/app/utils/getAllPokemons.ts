const Pokedex = require('pokeapi-js-wrapper')

const P = new Pokedex.Pokedex()

const getAllPokemons = (): Promise<Array<any>> => {
  return P.getPokemonsList().then((response: any) => response.results)
}

export default getAllPokemons
