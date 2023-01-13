var mqtt = require('mqtt')

var options = {
    host: '127.0.0.1',
    port: 1883,
    protocol: 'mqtts',
    username: 'local',
    password: 'password'
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});


// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello');