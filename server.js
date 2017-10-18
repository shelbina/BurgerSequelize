// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

//Added to sync our models
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/controllers.js');
app.use('/', router);

// Open Server

