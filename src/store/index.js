import Vue from 'vue';
import Vuex from 'vuex';

import pokemons from './modules/pokemons';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pokemons,
  },
  strict: false,
  plugins: [],
});

export default store;
