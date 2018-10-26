const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const cars = await loadPostsConnection();
    res.send(await cars.find({}).toArray());
});

// Add item
router.post('/', async (req, res) => {
    const cars = await loadPostsConnection();
    let newCar = {
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        engine: req.body.engine,
        createdAt: new Date() // consider creating a UTC date
    }
    await cars.insertOne(newCar);
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
        'mongodb://sa:aabbcc1234@ds143293.mlab.com:43293/vue_cars', {
        useNewUrlParser: true
    });

    // returns DB "vue_express" collection a.k.a table "posts"
    return client.db('vue_cars').collection('cars');
}



module.exports = router;