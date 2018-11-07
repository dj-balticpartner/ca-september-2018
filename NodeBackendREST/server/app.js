const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// items
const cars = require('./routes/api/cars')
app.use('/api/cars', cars);

// run the server
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));




// // body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cors()); // 2
// //set Static path
// //app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // app.get('/', function (req, res) {
// //     db.users.find(function(err,docs){
// //         //console.log(docs);
// //         res.render('index', {
// //             title: 'Customers',
// //             users: docs // docs is DB yra musu "users"
// //         });
// //     });
   
// //    //res.json(person);
// // });

// let cars = [
//     {
//         id: 1,
//         brand: "WV",
//         model: "Passat",
//         price: 10000
//     },
//     {
//         id: 2,
//         brand: "WV",
//         model: "Polo",
//         price: 5000
//     },
//     {
//         id: 3,
//         brand: "Mazda",
//         model: "6",
//         price: 15000
//     }
// ]

// app.get('/', function (req, res) {
//     db.users.find(function(err,docs){
//         //console.log(docs);

//         // res.render('index', {
//         //     title: 'Customers',
//         //     users: docs // docs is DB yra musu "users"
//         // });

//         res.json(cars);
        
//     });
   
//    //res.json(person);
// });

// app.post('/users/add', function (req, res) {
//     //TODO: CONSIDER ADDING VALIDATION, Before you save!!!
//     let newUser = {
//         //id: getNewID(users),
//         name: req.body.name,
//         age: req.body.age,
//         email: req.body.email
//     }

//     //users.push(newUser);
//     db.users.insert(newUser, function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result);
//         }
        
//         res.redirect('/');
//     });
//     // Reddirect to Root action OR
    
//     // or Display response in the current URL
//     // res.render('index', {
//     //     title: 'Customers',
//     //     users: users
//     // });
//  });

//  app.delete('/users/remove/:id', function (req, res) {

//     console.log("I need to delete:" + req.params.id);
//     //TODO: Remove user from DB
//     db.users.remove({_id: ObjectId(req.params.id)}, function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             //console.log(result);
//         }
        
//         res.redirect('/');
//     });
//  });

// app.use(express.static(path.join(__dirname, 'views')));


// app.listen(3000, function(){
//   console.log('Server start 3000');
// });

// function getNewID(array){
//     let newID = 0;
//     for(let i = 1; i < 10000000000; i++){

//         let existingentry = array.find(function(x) {            
//             return x.id === i;
//         });
        
//         if(typeof existingentry === 'undefined'){
//             //found
//             newID = i;
//             break;
//         }
//     }
//     return newID;
// }

