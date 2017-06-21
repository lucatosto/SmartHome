var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  var mongo = process.env.MONGOLAB_URI || 'mongodb://localhost/Tododb',
  mongoose = require('mongoose'),
  Task = require('./api/models/listModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(mongo);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/listRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
