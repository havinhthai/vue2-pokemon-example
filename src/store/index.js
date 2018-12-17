import Vue from 'vue';
import Vuex from 'vuex';

import pokemonState from './modules/pokemons';
import detailPokemonState from './modules/pokemon';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pokemonState, detailPokemonState,
  },
  strict: false,
  plugins: [],
});

export default store;
