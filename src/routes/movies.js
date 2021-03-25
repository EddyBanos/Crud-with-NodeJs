//this is a 'model, to routes, there's have been one per object
const { Router} = require('express');
const router = Router();
const _ = require('underscore');
const movies= require('../sample.json');

console.log(movies);

router.get('/', (req,res)=>{
    res.json(movies);
})

router.post('/',(req,res)=>{
    
    const {title, director, anio, rating} = req.body ;
    //here goes an validation
    if (title && director && anio && rating){
        const id = movies.length + 1; //autoincrementar el id desde el backend
        const newMovie= {...req.body,id} //pasa todo el req a un obj nuevo
        movies.push(newMovie);
        console.log(newMovie);
      //  res.json(movies); --> this generate an error cannot set headers... 
 res.send('request successfully');
    }else{
        console.log('request failed');
        res.send("Can't get the json");
    }
});

router.put('/:id', (req,res)=>{
    const { id } = req.params;
    const { title, director, anio, rating } = req.body
    if (title && director && anio && rating){
        _.each(movies, (movie,i)=>
        {
            if(movie.id == id){
                movie.title = title;
                movie.director =director;
                movie.anio = anio;
                movie.rating = rating;
        }
});
res.json(movies);
    }else {
        res.status(500);
    }
});
    router.delete('/:id', (req,res)=>{
        const { id } = req.params;
        _.each(movies, (movie,i)=>{
            if (movie.id ==id){
                movies.splice(i,1);
            }
        });
        res.send(movies);
})
 module.exports = router;