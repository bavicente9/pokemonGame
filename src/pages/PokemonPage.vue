<template>
      <h1> Who is this pokemon? </h1>

        <!-- TODO: img -->
        <PokemonPicture :pokemonId='4' :showPokemon='true' />
        <!-- TODO: opciones -->
        <PokemonOptions :pokemons='pokemonArr' />
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '../helpers/getPokemonOptions'


export default {
  name: 'App',
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data(){
    return{
      pokemonArr:[]
    }
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonArr= await getPokemonOptions()
      console.log(this.pokemonArr);
    }
  },
  //hook de ciclo de vida
  mounted(){
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>