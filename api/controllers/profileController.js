'use strict';


//coordinate DIEEI
var ltd= 37.5258268;
var lng= 15.0747295;


var mongoose = require('mongoose'),
    Profilo = mongoose.model('Profili');

exports.list_all_profile = function(req, res) {
  Profilo.find({}, function(err, profilo) {
    if (err)
      res.send(err);
    res.json(profilo);
  });
};

exports.create_a_profile = function(req, res) {
  var profilo = new Profilo(req.body);

  var dato = req.body.name;
  var dato2 = req.body.surname;


  res.json(
    {
      message: "Questa è la response del server"}
  );

  console.log("dato: --->"+dato+"dato2: --->"+dato2);



  new_profile.save(function(err, profilo) {
    if (err)
      res.send(err);
    res.json(profilo);
  });
};

exports.read_a_profile = function(req, res) {
  Profilo.findById(req.params.id, function(err, profilo) {
    if (err)
      res.send(err);
    res.json(profilo);
  });
};


exports.update_a_profile = function(req, res) {
  Profilo.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, profilo) {
    if (err)
      res.send(err);
    res.json(profilo);
  });
};
