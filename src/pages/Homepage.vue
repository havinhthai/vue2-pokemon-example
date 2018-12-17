<template>
    <div class="row">
      <div class="col-12">
        <h1>Pokedex</h1>

        <InputSearch />

        <Alert
          :isShow="pokemonState.response.isShow"
          :alertType="pokemonState.response.type"
          :message="pokemonState.response.message" />
        <hr>

        <Loading v-if="pokemonState.isLoading" />

        <div class="row">
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
  import Loading from '../components/Loading';
  import Alert from '../components/Alert';

  export default {
    name: 'Homepage',
    components: {
      InputSearch, PokemonBox, Alert, Loading,
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
