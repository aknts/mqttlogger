// Converted to using mqttmod to dump message to an mqtt topic and at console.
module.exports = function (broker, logtopic, mqttmod, local, callback){
	var module = {};
	module.log = function(level, message, broker, logtopic, mqttmod, callback){
		var msg = '['+(new Date())+'] [' + level + '] ['+ message + ']';
		if (local == 0) {
			mqttmod.send(broker, logtopic, msg, callback);
		}
		console.log('['+(new Date())+'] [' + level + '] ['+ message + ']');
	}
	module.error = function(message){
		this.log('ERROR', message, broker, logtopic, mqttmod, local, callback);
	}
	module.info = function(message){
		this.log('INFO', message, broker, logtopic, mqttmod, local, callback);
	}
	module.debug = function(message){
		this.log('DEBUG', message, broker, logtopic, mqttmod, local, callback);
	}
	return module;
};
