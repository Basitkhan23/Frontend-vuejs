<template>
  <div id="App">
    <v-app>
  <!-- Navbar -->
    <v-content>
      <router-view></router-view>
    </v-content>
  <!-- footer   -->
    <Footer />
  </v-app>
  </div>
  
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{Footer},
  data: () => ({
    //
  }),
};
</script>

<style scoped>
  #app {
    background-color:grey;
  }
</style>