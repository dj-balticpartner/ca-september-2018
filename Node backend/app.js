var express = require('express');
var bodyParser = require('body-parser');
var path = require ('path');
var mongojs = require('mongojs');
var db = mongojs('customerApp', ['users'])

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    db.users.find(function(err,docs){
        console.log(docs);
        res.render('index', {
            title: 'Customers',
            users: docs // docs is DB yra musu "users"
        });
    });
   
   //res.json(person);
});

app.post('/users/add', function (req, res) {
    //TODO: CONSIDER ADDING VALIDATION, Before you save!!!
    let newUser = {
        //id: getNewID(users),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }

    //users.push(newUser);
    db.users.insert(newUser, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
        
        res.redirect('/');
    });
    // Reddirect to Root action OR
    
    // or Display response in the current URL
    // res.render('index', {
    //     title: 'Customers',
    //     users: users
    // });
 });

 app.delete('/users/remove', function (req, res) {

    console.log("I need to delete:"+req.params.id);
    //TODO: Remove user from DB
    db.users.remove({_id: ObjectId(req.params.id)}, function(err, result){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
 });

app.use(express.static(path.join(__dirname, 'views')));


app.listen(3000, function(){
  console.log('Server start 3000');
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

