<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Enter pokemon's name" v-model="keySearch">
    
    <div class="input-group-append">
      <button class="btn btn-primary" id="basic-addon2" @click="onSearch">Search</button>
    </div>
  </div>
</template>

<script>
  import { SEARCH_POKEMONS, GET_POKEMONS } from '../store/actionTypes.js'

  export default {
    name: 'InputSearch',
    data () {
      return {
        keySearch: '',
      };
    },
    computed: {
      keySearchLowerCase: function() {
        return this.keySearch.toLowerCase();
      }
    },
    methods: {
      onSearch: function() {
        if (!this.keySearch) {
          if (this.$store.state.pokemonState.pokemons.length > 1) {
            alert('Please enter pokemon\'s name');
            return;
          }

          this.$store.dispatch(GET_POKEMONS);
          return;
        }

        this.$store.dispatch(SEARCH_POKEMONS, this.keySearch.toLowerCase());
      },
    },
  };
</script>

<style scoped>

</style>
