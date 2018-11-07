const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

let _cars = [
    {
        id: 1,
        brand: "WV",
        model: "Passat",
        price: 10000,
        engine: 2.0
    },
    {
        id: 2,
        brand: "WV",
        model: "Polo",
        price: 5000,
        engine: 2.0
    },
    {
        id: 3,
        brand: "Mazda",
        model: "6",
        price: 15000,
        engine: 2.0
    }
]

router.get('/', async (req, res) => {
    const cars = _cars;//await loadPostsConnection();
    //res.send(await cars.find({}).toArray());
    res.send(cars);
});

// Add item
router.post('/', async (req, res) => {
    const cars = _cars;//await loadPostsConnection();    
    let newCar = {
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        engine: req.body.engine,
        createdAt: new Date() // consider creating a UTC date
    }
    _cars.push(newCar);
    //await cars.insertOne(newCar);
    res.status(201).send();
});

// // Add item
// router.post('/', async (req, res) => {
//     const posts = await loadPostsConnection();
//     let newPost = {
//         text: req.body.text,
//         createdAt: new Date() // consider creating a UTC date
//     }
//     await posts.insertOne(newPost);
//     res.status(201).send();
// });

//connect to DB
async function loadPostsConnection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb://sa:aabbcc1234@ds151513.mlab.com:51513/cars_db', {
        useNewUrlParser: true
    });

    // returns DB "vue_express" collection a.k.a table "posts"
    return client.db('cars_db').collection('cars');
}



module.exports = router;