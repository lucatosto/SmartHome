var mqtt = require('mqtt'), url = require('url');
var url = "mqtt://" + "m12.cloudmqtt.com";


//https://www.cloudmqtt.com/
//email: aikon_89@hotmail.it
//pass: sistemiembedded
var options = {
  port: 11914,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: 'yigqtcwy',
  password: 'cqnOzCX8sbff'
};


var my_message = '23'; //my command
var pub_topic = 'cmd/actuator/on/';
var rcv_topic = 'receive/actuator';

pub_topic=rcv_topic;

// Create a client connection
var client = mqtt.connect(url, options);
try {
	console.log('Client mqtt create;\n');
	client.on('connect', function() { // When connected
	console.log('connect;\n');  

	// subscribe to a topic
	  client.subscribe(pub_topic, function() {
	    // when a message arrives, do something with it
	    client.on('message', function(topic, message, packet) {
	      console.log("Received '" + message + "' on '" + topic + "'");
	    });
	  });

	// publish a message to a topic
	  client.publish(pub_topic, my_message +' '+ new Date().toString(), function() {
	    console.log("Message is published");
	    //client.end(); // Close the connection when published
	  });
	});



    } catch (err) {
    	console.log(err)
}
