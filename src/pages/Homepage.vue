<template>
    <div class="row">
      <div class="col-12">
        <h1>Pokedex</h1>

        <router-view />

        <InputSearch />

        <Alert
          :isShow="pokemonState.response.isShow"
          :alertType="pokemonState.response.type"
          :message="pokemonState.response.message" />
        <hr>

        <div class="loading-box" v-if="pokemonState.isLoading">
          <img src="https://vignette.wikia.nocookie.net/central/images/a/af/Tumblr_mjgv8kEuMg1s87n79o1_400.gif/revision/latest?cb=20160524173235"
               />
        </div>

        <div class="row" v-else>
          <PokemonBox
            v-for="(pokemon, index) in pokemonState.pokemons"
              :id="index + 1"
              :pokemon="pokemon"
              :key="pokemon.name"
          />
        </div>
      </div>
    </div>
</template>

<script>
  import { GET_POKEMONS } from '../store/actionTypes.js';

  import InputSearch from '../components/InputSearch';
  import PokemonBox from '../components/PokemonBox';
  import Alert from '../components/Alert';

  export default {
    name: 'Homepage',
    components: {
      InputSearch, PokemonBox, Alert,
    },
    created() {
      this.$store.dispatch(GET_POKEMONS);
    },
    computed: {
      pokemonState: function () {
        return this.$store.state.pokemonState;
      },
    },
  };
</script>

<style>
  .loading-box {
    text-align: center;
  }
  .loading-box img {
    width: 400px;
    height: 285px;
  }
</style>
