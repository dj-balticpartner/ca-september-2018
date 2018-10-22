var app = new Vue({
    el: '#app',
    data: {
      firstName: "Jonas",
      lastName: "Jonaitis",
      message: 'You loaded this page on ',
      currentTime: new Date().toLocaleString(),
      todos: [],
      users: [],
      isDisabled: true
    },
    created(){
      fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(json=>{
        console.log(json);
        this.todos = json;
      })
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json=>{
        console.log(json);
        this.users = json;
      })
      
      //loadButton();
    },
    computed: {
      checkDisabled: function (){
        if(this.users.length < 5){
          this.isDisabled = false
        }
      }
    },
    methods: {
      printMessage : function (msg) {
        this.message = msg;
        console.log(msg);
      },
      updateMessage : function (msg){

      }
    },
    watch: {
      users: function() {
        if(this.users.length < 5){
          this.isDisabled = false
        }        
      },
      lastName: function() {
        console.log(this.lastName);
      }
    }
  })




  
  Vue.component('user', {  
    props: ['user'],
    template: `<div> <span style="color:red;">{{ user.id }}</span> <span style="color:blue;">{{ user.name }}</span>  <button v-on:click="greet(user)">Present yourself!</button> <button v-on:click="remove(user)">DELETE</button></div>`,
    data() {
      return {

        customProperty: "myCustomProperty"
      }
    },
    created(){
      //console.log(this.customProperty)
      //loadButton();
    },

    methods:{
      greet: function(user){
        let p = `Hi, my name is:${user.name} and my ID is:${user.id} and my Customproperty is: ${this.customProperty}`;
        console.log(p);
      },
      remove : function(user){
        let target = app.users.filter(function (u) {
          return u.id === user.id;
        })[0];

        app.users.splice(app.users.indexOf(target), 1); 
        //console.log(_id);
      },
      
    }
  })
