
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//use cors. this is server side material
//allows us to use get post and other methods for example
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//creating a new object that is a connection to the mongo database
const myConnectionString = 'mongodb+srv://User:12345@cluster0.oom0v.mongodb.net/<dbname>?retryWrites=true&w=majority';
//this is how we connect to the database in question
mongoose.connect(myConnectionString, { useNewUrlParser: true });
//creating a new schema
const Schema = mongoose.Schema;
//assinging details that are to be stored in the schema
var playerSchema = new Schema({
    name: String,
    age: String,
    number: String,
    image: String
});
//creation of the database name
var PlayerModel = mongoose.model("player", playerSchema);
//get method to the main page
app.get('/', (req, res) => {
    res.send('Welcome to the teams database!')
})
//get method for players api page
app.get('/api/myteam', (req, res) => {
    //return data to the user 
    PlayerModel.find((err, data)=>{
        res.json(data);
    })

})
//output is displayed on the server side( can be seen in the terminal )
//this is the url where we can see individual players based on the id
//finds the id and returns the details
app.get('/api/myteam/:id', (req,res)=>{
    console.log(req.params.id);
    PlayerModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})
//put method, used to edit the players
app.put('/api/myteam/:id', (req, res)=>{
    console.log("Update player: "+ req.params.id);
    //pass up object containing new object. in other words update the document
    console.log(req.body);
    PlayerModel.findByIdAndUpdate(req.params.id,req.body, {new:true}, 
        (err,data)=>{
            //sending back the data
            res.send(data);
        })

})
//delete method
//player details are taken and when the appropriate id has been found is deleted from the server
app.delete('/api/myteam/:id', (req, res)=>{
    console.log("Delete Player: "+req.params.id);
    PlayerModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})
//post method
//player receives new player that has been added to the server. 
app.post('/api/myteam', (req, res) => {
    console.log('Player Received!');
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.image);
    console.log(req.body.number);

    PlayerModel.create({
        name: req.body.name,
        age: req.body.age,
        number: req.body.number,
        image: req.body.image
    })
    res.send('Item added');
})
//listening at the port 4000 for the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
