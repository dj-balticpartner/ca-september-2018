var app = new Vue({
    el: '#app',
    data: {
      message: 'You loaded this page on ',
      currentTime: new Date().toLocaleString(),
      todos: []
    },
    created(){
      fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(json=>{
        console.log(json);
        this.todos = json;
      })
    },
    methods: {
      printMessage : function (msg) {
        this.message = msg;
        console.log(msg);
      },
      updateMessage : function (msg){
        
      }
    }
  })

