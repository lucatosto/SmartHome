'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'inserisci il nome del task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['inattesa', 'incorso', 'completato']
    }],
    default: ['inattesa']
  }
});

var Sensore = new Schema({
  valore: {
    type: int,
    Required: 'inserisci valore'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  type: {
      type: String,
      enum: ['temperatura', 'pressione', 'localizzazione']
    }
});


var Profilo = new Schema({
  id:{
    type: String,
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

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Sensori', Sensore);
module.exports = mongoose.model('Profili', Profilo);
