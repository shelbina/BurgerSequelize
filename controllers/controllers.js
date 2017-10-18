// Node Dependencies
var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/', function (req, res) {
	res.redirect('/index');
  });
  
  // Index Page (render all burgers to DOM)
  router.get('/index', function (req, res) {
		db.newburger.findAll().then(function(dbburger){
			console.log(dbburger);
			var hbsObject = { burgers:dbburger };
			res.render('index', hbsObject);
		})
  });
  
  // Create a New Burger
  router.post('/burger/create', function (req, res) {
	db.newburger.create({
		burger_name: req.body.burger_name,
	})
  });
  
  // Devour a Burger
  router.post('/burger/eat/:id', function (req, res) {
	db.newburger.update({
		devoured:true
	}, {
				where: {
					id:req.params.id,
				}
	}).then(function(dbburger){
		res.redirect('/index')
		console.log(dbburger);
	})
  });

module.exports = router;