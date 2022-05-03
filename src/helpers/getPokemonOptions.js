import pokemonApi from "@/api/pokemonAPI"

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650))

  return pokemonsArr.map((item, index) => index + 1)
}

const getPokemonOptions = async () => {
  //mezcla las posiciones de los pokemons
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)

  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

  return pokemons;
}
//se desestructura el arreglo del argumento
const getPokemonNames = async ([a, b, c, d] = []) => {

  const resp = await pokemonApi.get(`/1`)

  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]

  //returna el mismo arreglo con las respuestas
  const [pok1,pok2,pok3,pok4] = await Promise.all(promiseArr)

  return[
    {name:pok1.data.name, id:pok1.data.id},
    {name:pok2.data.name, id:pok2.data.id},
    {name:pok3.data.name, id:pok3.data.id},
    {name:pok4.data.name, id:pok4.data.id},
  ]

}


export default getPokemonOptions;