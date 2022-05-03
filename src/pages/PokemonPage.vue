<template>
  <h1 v-if="!pokemon">Searching pokemon...</h1>

  <div v-else>
    <h1>Who is this pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h2 v-if="showAnswer">{{ message }}</h2>
      <button @click="newGame">New Game</button>
    </template>

  </div>
</template>

<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "../helpers/getPokemonOptions";

export default {
  name: "App",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      //selecciona un pokemon aleatorio
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },

    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId === this.pokemon.id) {
        this.message = `Correct: ${this.pokemon.name}`;
      } else {
        this.message = `Oops, it is: ${this.pokemon.name}`;
      }
    },

    newGame(){
      this.pokemon= null
      this.showPokemon= false
      this.showAnswer= false
      this.message= ""

      this.mixPokemonArray()
    }
  },
  //hook de ciclo de vida
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>