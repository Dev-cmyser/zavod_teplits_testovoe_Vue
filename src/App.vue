<template>
  <div id="app">
    <Home/>
  </div>
</template>


<style lang="scss">
// @import '~materialize-css/dist/css/materialize.min.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css';

@import 'assets/style.css';
</style>


<script>
import Home from '@/views/HomeView'
import  'vue-yandex-maps';
export default {
  methods: {
   
  },
  components: {
    Home
  }
}
</script>