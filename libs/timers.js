var Twitch = require('../libs/twitch.js');
var Compliment = require('../libs/compliments.js');
var Config = require("../config.json");

var Timers = function () {};

Timers.prototype.complimentTimer = null;

//Starts the bot
Timers.prototype.startCompliment = function(){
	Twitch.sendChatMsg("Welcome to bunnybot101! I'm going to say a random compliment about Ven every 20 minutes or until a mod or higher types !bunnyboy stop. Let's get started.");
	//var msg = Compliment.getCompliment();
	setTimeout(function(){
		var msg = Compliment.getCompliment(); 
		Twitch.sendChatMsg(msg);}, 1000 * 1.5);
	//Run a compliment on an interval
	this.complimentTimer = setInterval(function() {
		this.sayCompliment();
	}.bind(this), 1000 * 60 * Config.twitch.complimentRate );
};

//Stops the bot
Timers.prototype.stopCompliment = function(){
	clearInterval(this.complimentTimer);
	Twitch.sendChatMsg("that's enough venLove for now. Take care all!");
};

//Say a compliment
Timers.prototype.sayCompliment = function(){
	var compliment = Compliment.getCompliment();
	Twitch.sendChatMsg(compliment);
};

module.exports = new Timers();