//Dependencies
const express = require('express');
const eHandlebar = require('express-handlebars');
const bodyParse = require('body-parser');

const app = express();

/// port
const PORT = process.env.PORT || 3020;

//middlware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true}));
app.use(express.static('public'));

//setup handlebars, this is the template engine
app.engine('handlebars', eHandlebar({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

///add the routes that we need to build. Then use the routes
const routes = require('./controllers/burgers_controller.js');
app.use(routes);



app.listen(PORT, function(){
    console.log('Server is listening on port ' + PORT)
})