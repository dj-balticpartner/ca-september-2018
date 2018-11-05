<template>
<div>  
    <div id="results" class="pt-5">
            <div class="container">
                <h1>Search car</h1>
            <div class="row">
                <div class="col-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Id</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Model</th>
                                <th scope="col">Engine</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="tbody_cars">
                            <tr v-for="car in cars" :key="_id"><td>{{car._id}}</td></tr>    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Cars',
  data () {
    return {
      msg: 'This is Cars vue',
      cars: []
    }
  },
    created(){
        fetch('http://localhost:5000/api/cars').then(response => response.json()).then(json=>{
        this.cars = json;
        })
        //loadButton();
    }
}
</script>

<style scoped>

</style>