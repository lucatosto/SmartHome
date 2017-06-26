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
  var new_profile = new Profilo(req.body);

  var dato = req.body.id;
  var dato2 = req.body.temperatura;
  var dato3 = req.body.musica;
  var dato4 = req.body.luminanza;


  res.json(
    {
      message: "Questa è la response del server"}
  );

  console.log("dato: --->"+dato+"dato2: --->"+dato2+"dato3: --->"+dato3+"dato4: --->"+dato4);



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
