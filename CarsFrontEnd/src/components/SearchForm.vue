<template>

<section id="intro">
    <div class="row">
        <div class="col-12">
            <div class="panel">
                <div style="height:300px;"></div>
            </div>
        </div>
    </div>
    <div class="overVideo"></div>            
    <video autoplay muted loop id="carsVideo">
        <source src="static/assets/carsbg.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>            
</section>

</template>

<script>
export default {
  data () {
    return {
      msg: 'This is search form'
    }
  }
}
</script>

<style scoped>

</style>