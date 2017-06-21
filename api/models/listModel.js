'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var Dato = new Schema({
  name: {
    type: String,
    Required: 'inserisci nome del dato'
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

module.exports = mongoose.model('Tasks', TaskSchema);
