<template>
  <div class="home">
    <v-app-bar 
    sharp
    elevation="24"
    height="100"
    >
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--Link Component -->
      <Links />
    </v-app-bar>
    
    <!-- Components-->
      <Navbar /> 
     
  </div>
</template>

<script>
// @ is an alias to /src
  import Navbar from '../components/Navbar'
  import Links from '../components/contents/Links'

export default {
  
  components: {Navbar, Links}
}
</script>

<style scoped>

</style>