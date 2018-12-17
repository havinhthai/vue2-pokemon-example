<template>
  <div>
    <Navbar />

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/partial/Navbar.vue';

  export default {
    name: 'Main',
    components: { Navbar },
  }
</script>
