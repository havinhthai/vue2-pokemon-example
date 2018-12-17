import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILED,
  GET_POKEMON_PENDING,
} from '../actionTypes';

const defaultState = {
  pokemon: {},
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
    [GET_POKEMON]: ({ commit }, pokemonId) => {
      commit(GET_POKEMON_PENDING);

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(res => res.json())
        .then(json => commit(GET_POKEMON_SUCCESS, json))
        .catch(error => commit(GET_POKEMON_FAILED, error.message));
    },
  },
  mutations: {
    [GET_POKEMON_SUCCESS]: (state, pokemon) => {
      state.response = {
        isShow: false,
        type: 'success',
        message: 'Get pokemon success',
      };

      state.pokemon = pokemon;
      state.isLoading = false;
    },
    [GET_POKEMON_FAILED]: (state, error) => {
      state.response = {
        isShow: true,
        type: 'danger',
        message: error,
      };

      state.isLoading = false;
    },
    [GET_POKEMON_PENDING]: (state) => {
      state.isLoading = true;
    },
  },
};
