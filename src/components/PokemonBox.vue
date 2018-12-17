<template>
  <div class="col-3">
    <div class="pokemon-intro-box text-center">
      <img
        :src="url"
        class="img-fluid">

      <h3>{{ pokemon.name }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PokemonBox',
    props: {
      id: Number,
      pokemon: {
        default: {},
        type: Object,
      },
    },
    computed: {
      url: function () {
        let defaultUrl = 'https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG';

        if (this.id < 808) {
          defaultUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
        }

        return defaultUrl;
      },
    },
  };
</script>

<style scoped>
  .pokemon-intro-box {
    /*max-height: 250px;*/
    margin-bottom: 15px;
    border: 1px solid #c0c3c6;
  }

  h3 {
    text-transform: capitalize;
  }

  img {
    max-height: 128px;
  }
</style>
