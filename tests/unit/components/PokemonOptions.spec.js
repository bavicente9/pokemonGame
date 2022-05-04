
import {shallowMount} from '@vue/test-utils'

import PokemonOptions from '@/components/PokemonOptions'

import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOptions component', () => {
  
    let wrapper 
    
    beforeEach(() => {
        
         wrapper = shallowMount(PokemonOptions,{
            props:{
                pokemons
            }
         })
    })

    test('Snapshot match',() => {

        expect(wrapper.html()).toMatchSnapshot()
    })

   

    test('must emit "selection" with its params when is clicked',() => {
      const [li1,li2,li3,li4] = wrapper.findAll('li')
    
      li1.trigger('click')
      li2.trigger('click')
      li3.trigger('click')
      li4.trigger('click')
      
      expect(wrapper.emitted('selection').length).toBe(4)
      
      expect(wrapper.emitted('selection')[0]).toEqual([1])
      expect(wrapper.emitted('selection')[1]).toEqual([2])
      expect(wrapper.emitted('selection')[2]).toEqual([3])
      expect(wrapper.emitted('selection')[3]).toEqual([4])
    })
    
})