'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Profilo = new Schema({
  id:{
    type: String,
    Required: 'Inserisci id Profilo'
  },
  temperatura:{
    type: String,
    Required: 'Inserisci temperatura',
  },
  musica:{
    type: String,
    Required: 'Inserisci genere musicale'
  }
});

module.exports = mongoose.model('Profili', Profilo);
