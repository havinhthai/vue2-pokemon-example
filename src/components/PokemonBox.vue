<template>
  <div class="col-3">
    <div class="pokemon-intro-box">
      <img src="https://i.ebayimg.com/images/g/huAAAOSwT6pV2hB6/s-l300.jpg" class="img-fluid">

      <h3>Pokemon'name</h3>

      <p>Description</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PokemonBox',
  };
</script>

<style scoped>
  .pokemon-intro-box {
    /*max-height: 250px;*/
    margin-bottom: 15px;
    border: 1px solid #c0c3c6;
  }
</style>
