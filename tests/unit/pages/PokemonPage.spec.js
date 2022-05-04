
import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('Snapshot Match', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                };
            },
        });

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('mixPokemonArray should be called in mounted', () => {

        const mixPokemonArraySpye = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpye).toHaveBeenCalled()

    })

    test('should show components pokemonPicture and PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                };
            },
        });
        
        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const pokemonOptions = wrapper.find('pokemon-options-stub')
        
        expect(pokemonPicture.exists()).toBeTruthy()
        expect(pokemonOptions.exists()).toBeTruthy()
        
        expect(pokemonPicture.attributes('pokemonid')).toBe("1")
        expect(pokemonOptions.attributes('pokemons')).toBeTruthy()
    })
    
    test('test with checkAnswer', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                };
            },
        });
        
        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
    })
})