'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks'),
    Sensore = mongoose.model('Sensori');

var mqtt = require('mqtt'), url = require('url');
var url = "mqtt://" + "m10.cloudmqtt.com";

var options = {
    port: 18471,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'nulfupjf',
    password: '7yPEm2Sjd8Au'
};

var my_message = 'Ricevuto! - Messaggio presente in API'; //my command
var pub_topic = 'cmd/actuator/on/';
var rcv_topic = 'receive/actuator';
pub_topic=rcv_topic;


exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task eliminato' });
  });
};

exports.test_communication = function(req, res){

    res.json(
      {message: "Messaggio che viene dall'API!"}
    );

    var my_message = 'Ricevuto! - Messaggio presente in API'; //my command
    var pub_topic = 'cmd/actuator/on/';
    var rcv_topic = 'receive/actuator';

    pub_topic=rcv_topic;

    // Create a client connection
    var client = mqtt.connect(url, options);
    try {
    	console.log('Client mqtt creato;\n');
    	client.on('connect', function() { // When connected
    	console.log('connesso;\n');

    	// subscribe to a topic
    	  client.subscribe(pub_topic, function() {
    	    // when a message arrives, do something with it
    	    client.on('message', function(topic, message, packet) {
    	      console.log("Ricevuto '" + message + "' su '" + topic + "'" + "MESSAGGIO ARRIVATO DA CLOUDMQTT");
    	    });
    	  });

    	// publish a message to a topic
    	  client.publish(pub_topic, my_message +' '+ new Date().toString(), function() {
    	    console.log("Message pubblicato");
    	    client.end(); // Close the connection when published
    	  });
    	});



        } catch (err) {
        	console.log(err)
    }
    console.log("Ho inviato tutto su cloud mqtt. ")
};


exports.test_communication_data = function(req, res){
    var dato = req.params.name;
    var dato2 = req.body.name;


    res.json(
      {message: "Ho ricevuto dato : "+dato+ "dato2: "+dato2}
    );

    console.log("---->"+dato+"---->2:"+dato2);
};
