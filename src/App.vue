<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <h2>Pokedex</h2>

        <InputSearch />

        <hr>

        <div class="row">
          <PokemonBox />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from './store';
  import { GET_POKEMONS } from './store/actionTypes';
  import InputSearch from './components/InputSearch';
  import PokemonBox from './components/PokemonBox';

  export default {
    name: 'app',
    store,
    components: {
      InputSearch, PokemonBox,
    },
    created() {
      this.$store.dispatch(GET_POKEMONS);
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
