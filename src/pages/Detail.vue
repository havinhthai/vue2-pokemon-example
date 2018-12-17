<template>
    <div class="row">
        <div class="col-12">
            <h1>Pokemon detail</h1>
        </div>

        <Loading v-if="detailPokemonState.isLoading" />

         <Alert
            v-else-if="detailPokemonState.response.isShow"
          :isShow="detailPokemonState.response.isShow"
          :alertType="detailPokemonState.response.type"
          :message="detailPokemonState.response.message" />

        <template v-else>
            <div class="col-4">
                <img
                    :src="detailPokemonState.pokemon.sprites.front_default"
                    style="width: 60%"
                    class="img-fluid" />

            </div>
            <div class="col-8">
                <h3>{{ detailPokemonState.pokemon.name.toUpperCase() }}</h3>
            </div>
        </template>
    </div>
</template>

<script>
import Loading from '../components/Loading';
import Alert from '../components/Alert';

import { GET_POKEMON } from '../store/actionTypes.js';


export default {
    name: 'Detail',
    components: { Loading, Alert },
    created() {
        this.$store.dispatch(GET_POKEMON, this.$route.params.id);
    },
    computed: {
        detailPokemonState: function() {
            return this.$store.state.detailPokemonState;
        },
    },
}
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