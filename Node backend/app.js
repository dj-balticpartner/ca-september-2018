var express = require('express');
var bodyParser = require('body-parser');
var path = require ('path');

var app = express();

var logger = function(req,res,next){
   //console.log('logging...');
   next();
}
app.use(logger);
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set Static path
//app.use(express.static(path.join(__dirname, 'public')));


var users = [
   {
       id: 1,
       name: 'Jonas',
       age: 30,
       email:'jonas@takas.lt'
   },
   {
       id: 2,
       name: 'Petras',
       age: 32,
       email:'jonas@takas.lt'
   },
   {
       id: 3,
       name: 'Kazys',
       age: 33,
       email:'jonas@takas.lt'
   }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
   res.render('index', {
       title: 'Customers',
       users: users
   });
   //res.json(person);
});

app.post('/users/add', function (req, res) {
    let newUser = {
        id: getNewID(users),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }

    users.push(newUser);
    console.log(users);

 });

app.use(express.static(path.join(__dirname, 'views')));


app.listen(3000, function(){
  console.log('Server start 3000') ;
});

function getNewID(array){
    let newID = 0;
    for(let i = 1; i < 10000000000; i++){

        let existingentry = array.find(function(x) {            
            return x.id === i;
        });
        
        if(typeof existingentry === 'undefined'){
            //found
            newID = i;
            break;
        }
    }
    return newID;
}