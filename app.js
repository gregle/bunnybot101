// Load Modules and Configuration
var options = require('./config.json');
var Twitch = require('./libs/twitch.js');
var Timers = require('./libs/timers.js');

//Check to see if a user is a mod or the channel's owner
var isUserMod = function(channel, user){
	return (user["user-type"] === "mod" || user.username === channel.replace("#", ""));
};

//Once the client connects announce it's presence and start the timers
Twitch.client.on("connected", function(address, port)	{
	Twitch.sendChatMsg("Hello world.");
});

//With every line of chat
Twitch.client.on('chat', function(channel, user, message, self){
	//Don't listen to my own messages
	if (self) return;
	//If the first character of the message is an exclamation mark it's probably a command
	if(message.indexOf('!bunnybot') === 0 && (isUserMod(channel, user) || user.username === 'gregle')){
		//Split the message, the first value will be the command, subsequent values will be the arguments
		var msgArr = message.toLowerCase().split(" ");
		if (msgArr[1] === "start"){
			Timers.startCompliment();
		}
		if (msgArr[1] === "stop"){
			Timers.stopCompliment();
		}
	}
});