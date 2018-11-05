<template>
  <div id="app">

    <SearchForm></SearchForm>
    
    <Cars></Cars>

    <img src="./assets/logo.png">
    <!--<router-view/>-->
  </div>
</template>

<script>
import Cars from "./components/Cars"
import SearchForm from "./components/SearchForm"

export default {
  name: 'App',
  components: {
    Cars, SearchForm
  }
}
</script>

<style>

</style>
