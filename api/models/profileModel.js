'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Profilo = new Schema({
  id:{
    type: int,
    Required: 'Inserisci id Profilo'
  },
  temperatura:{
    type: int,
    Required: 'Inserisci temperatura',
  },
  musica:{
    type: String,
    Required: 'Inserisci genere musicale'
  }
});

module.exports = mongoose.model('Profili', Profilo);
