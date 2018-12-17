import {
  GET_POKEMONS,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILED,
  GET_POKEMONS_PENDING,
  SEARCH_POKEMON,
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_FAILED,
  SEARCH_POKEMON_PENDING,
} from '../actionTypes';

const defaultState = {
  pokemons: [],
  response: {
    isShow: false,
    type: '',
    message: '',
  },
  isLoading: false,
};

export default {
  state: defaultState,
  actions: {
    [GET_POKEMONS]: (context) => {
      context.commit(GET_POKEMONS_PENDING);

      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(result => result.json())
        .then(json => context.commit(GET_POKEMONS_SUCCESS, json.results))
        .catch(error => context.commit(GET_POKEMONS_FAILED, error.message));
    },

    [SEARCH_POKEMON]: (context, keySearch) => {
      context.commit(SEARCH_POKEMON_PENDING);

      fetch(`https://pokeapi.co/api/v2/pokemon/${keySearch}`)
      .then(result => result.json())
      .then(json => context.commit(SEARCH_POKEMON_SUCCESS, json))
      .catch(error => context.commit(SEARCH_POKEMON_FAILED, error.message));
    },
  },
  mutations: {
    [GET_POKEMONS_SUCCESS]: (state, pokemons) => {
      state.pokemons = pokemons;
      state.isLoading = false;
    },
    [GET_POKEMONS_FAILED]: (state, error) => {
      state.response = error;
      state.isLoading = false;
    },
    [GET_POKEMONS_PENDING]: (state, boolean = true) => {
      state.isLoading = boolean;
    },

    [SEARCH_POKEMON_SUCCESS]: (state, pokemon) => {
      state.response = {
        isShow: true,
        type: 'success',
        message: 'Get pokemons success',
      };

      state.pokemons = [pokemon];
      state.isLoading = false;
    },
    [SEARCH_POKEMON_FAILED]: (state, error) => {
      state.response = {
        isShow: true,
        type: 'danger',
        message: error,
      };

      state.isLoading = false;
    },
    [SEARCH_POKEMON_PENDING]: (state) => {
      state.response = { ...state.response, isShow: false };
      state.isLoading = true;
    },
  },
};
