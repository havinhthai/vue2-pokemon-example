import Vue from 'vue';
import Vuex from 'vuex';

import pokemonState from './modules/pokemons';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pokemonState,
  },
  strict: false,
  plugins: [],
});

export default store;
