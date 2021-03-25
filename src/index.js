const express = require('express');
const morgan= require('morgan');
const app= express();

// Settings
//la funcion process, sirve para tomar un puerto predeterminado si existe
app.set('port',process.env.PORT || 4000);
app.set('json spaces',2);

//Here come the middlware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Te da resultados mas claros, con mas datos
//app.use(morgan('combined'));

//Routes

//Any route can be placed here, but it's better place in other folder
//Route imported from file routes/index.js
app.use(require('./routes/index'));
//Declaring from this part, the first parameter from use, it's to say on what routes file its gonna be my rotuer
app.use('/api/movies',require ('./routes/movies'));

//Here starts the server
app.listen(app.get('port'), ()=>{
    console.log(`server running on port${app.get('port')}`);
});