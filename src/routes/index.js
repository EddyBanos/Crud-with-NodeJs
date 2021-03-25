//This file is used to define the routes that our app uses
//Here can be placed a route using imports from express; p.e. const App = requi***
//but we can use a router function

const { Router }= require('express');
const router=Router();
let person = {
    "nombre": "jorge",
    "ap": "lopez"
}
router.get('/test', (req,res)=>{
    res.json(person);
});

module.exports = router;