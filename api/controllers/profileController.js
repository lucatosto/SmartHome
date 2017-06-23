'use strict';


var mongoose = require('mongoose'),
    Profilo = mongoose.model('Profili');

exports.list_all_profile = function(req, res) {
  Profilo.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(profilo);
  });
};

exports.create_a_profile = function(req, res) {
  var new_profile = new Profilo(req.body);
  new_profile.save(function(err, profile) {
    if (err)
      res.send(err);
    res.json(profile);
  });
};

exports.read_a_profile = function(req, res) {
  Profilo.findById(req.params.id, function(err, profile) {
    if (err)
      res.send(err);
    res.json(profilo);
  });
};


exports.update_a_profile = function(req, res) {
  Profilo.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(profilo);
  });
};


exports.delete_a_profile = function(req, res) {
  Profilo.remove({
    _id: req.params.id
  }, function(err, profile) {
    if (err)
      res.send(err);
    res.json({ message: 'Profilo eliminato' });
  });
};
