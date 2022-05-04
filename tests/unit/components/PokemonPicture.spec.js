import PokemonPicture from '@/components/PokemonPicture'
import {shallowMount} from '@vue/test-utils'

describe("PokemonPicture Component", () => {
  
    test('match with snapshot', () => {
      
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId:1,
                showPokemon:false
            }
        })
        
        expect(wrapper.html()).toMatchSnapshot()
    })
    
    test('show image, pokemon n100',() => {
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId:100,
                showPokemon:false
            }
        })
        
        const [img1,img2] = wrapper.findAll('img')
        
        expect(img1.exists()).toBe(true)
        expect(img2).toBe(undefined)
        
        expect(img1.classes('hidden-pokemon')).toBe(true)
        expect(img1.attributes().src).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`)
        
    })
    
    test('show pokemon if showPokemon:true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId:100,
                showPokemon:true
            }
        })
        const img1 = wrapper.find('img')
        expect(img1.exists()).toBe(true)
        
        expect(img1.classes('hidden-pokemon')).toBe(false)
      
    })

})