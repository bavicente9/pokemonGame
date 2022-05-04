import pokemonApi from '@/api/pokemonAPI'

describe('pokemonApi', () => {
  
  test('axio should be correct configured', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  })
})