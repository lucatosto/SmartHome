var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongo = process.env.MONGODB_URI || "mongodb://localhost",
  mongoose = require('mongoose'),
  Task = require('./api/models/listModel'),
  Profilo = require('./api/models/profileModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect(mongo);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');
routes(app);


app.listen(port);


console.log('Il Server di SmartHome è up sulla porta: ' + port);
