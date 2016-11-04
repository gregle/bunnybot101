//load twitch messaging interface
var tmi=require('tmi.js');
var options = require("../config.json");

var Twitch = function () {};

Twitch.prototype.client = new tmi.client(options.twitch);
Twitch.prototype.client.connect();
Twitch.prototype.clientID = options.clientID;
Twitch.prototype.channel = options.twitch.channels[0].substring(1);

//Sends a message to twitch chat. Future work is to group messages and send them all at once in order to not send too many messages too quickly
Twitch.prototype.sendChatMsg = function(msg){
	this.client.action(this.channel, msg);
};

//Sends a message to twitch chat. Future work is to group messages and send them all at once in order to not send too many messages too quickly
Twitch.prototype.sendWhisperMsg = function(target, msg){
	this.client.whisper(target, msg);
};

module.exports = new Twitch();