<template>

<section id="intro">
    {{msg}}
    <div class="overVideo"></div>            
    <video autoplay muted loop id="carsVideo">
        <source src="static/assets/carsbg.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>            
</section>

</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      msg: 'This is search form'
    }
  }
}
</script>

<style scoped>

</style>