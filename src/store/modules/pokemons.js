import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILED,
  GET_POKEMONS_PENDING,
} from '../actionTypes';

export default {
  state: {
    pokemons: [],
    error: {},
    isLoading: false,
  },
  actions: {
    [GET_POKEMONS]: (context) => {
      context.commit(GET_POKEMONS_PENDING);

      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(result => result.json())
        .then(json => context.commit(GET_POKEMONS_SUCCESS, json.results))
        .catch(error => context.commit(GET_POKEMONS_FAILED, error));
    },
  },
  mutations: {
    [GET_POKEMONS_SUCCESS]: (state, pokemons) => {
      state.pokemons = pokemons;
      state.isLoading = false;
    },
    [GET_POKEMONS_FAILED]: (state, error) => {
      state.error = error;
      state.isLoading = false;
    },
    [GET_POKEMONS_PENDING]: (state, boolean = true) => {
      state.isLoading = boolean;
    },
  },
};
