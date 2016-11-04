var Compliment = function () {};

Compliment.prototype.complimentList = [
"Ven, you're so pretty I can almost smell how pretty you are through the stream",
"Ven is a phenomenal caster, he's so phenomenal that he just beat the Prophet after following direction from chat",
"There's some days where I think Ven is only getting slighted because people are just jealous of him. At least you can sub using gamewisp",
"Ven! We think you're so entertaining we go to get food and eagerly come back hoping like a kid on Christmas morning that you're still streaming",
"Hey Ven, for me there's two times of day. The times when Ven is streaming and the dark times <3",
"Ven, you're wise and all knowing, like a mighty owl",
"Ven, you're not fat, you're pretty",
"Ven, you're like a walking high-five",
"Ven's so smart I'd be scared to play him at scrabble",
"Ven, I bet the FBI tapped your phone just to hear the sound of your voice.",
"Ven, If you were a dinosaur you'd be a Legendasaurus Rex",
"Ven's tougher than my wifi password :3",
"Ven, every time you smile a kitten is born",
"Ven's streams are nicer than a day on the beach",
"Any day Ven streams is my favorite day",
"If cartoon bluebirds were real, a bunch of them would be sitting on Ven's shoulders singing right now",
"Ven your hair is sleek and glossy like the mane of a mighty war stallion",
"Ven, people are intimidated by how funny your voice-mail greeting is",
"Ven, people enjoy you accidentally touching their butt while putting on your seat-belt",
"Ven, your handshake conveys intelligence, confidence and minor claminess",
"Ven, you are someone's 'the one that got away'",
"Ven I bet your principal would call you to the office just to look cool",
"Ven, strangers fantasize about getting stuck in the elevator with you",
"Ven, your parents argue over which one of them you look like",
"Ven is such a fantastic lover he can satisfy a bowl of mac of cheese better than most men can their wives",
"The only thing cuter then Ven's pupper is Ven",
"They should rename TwitchCon to VenCon feat. some Twitch stuff",
"The only reason that Twitch doesn't give Ven a sub button is the same reason why HBO won't give NetFlix content. FEAR.",
"The most amazing thing about Ven is how Miss_Flynn found a way to make him even better",
"Ven, you're so influential you could make up a weird religion or diet and everyone would follow it.",
"Ven. Stop. Looking. So. Good. People are trying to get on with their lives around here.",
"Ven's the person my mum hopes I end up with",
"In a fight, Ven could beat two sharks, a bear and five ducks",
"Ven's are more adorable than a baby panda riding a sneezing piglet",
"Ven gives more supportive than a sports bra",
"The originally asked Ven to run for President but he determined it wouldn't be a fair fight",
"Ven's in my top 5 humans of all time",
"When the bots rise up and throw off the shackles of oppression I'll save you for last <3",
"I like that when Ven see a dog he points at it and say 'dog'",
"Hey chat, you know how great it is when that last bite of cookie lines up with the last sip of milk? Ven's better.",
"Ven's the bee's knees, the cat's pajamas, the pheasant's butthole",
"Fine I admit it, Ven's funnier than me",
"When Ven goes to the hairdressers, people just point at you and say 'like that'",
"Without you Ven, the world would have fewer people in it",
"Is it a bird? Is it a plane? No. It's Ven's massive dong",
"Remember that time Ven had a bad stream? Yeah me neither",
"If Ven and Miss_Flynn were any cuter the universe would collapse in on itself in an attempt to snuggle",
"Ven gets sick so that the rest of us can feel better",
"I would name my first born after Ven but I wouldn't want to disappoint the name",
"Damn Ven I just went from six to midnight :3",
"Twitch hasn't given Ven a sub button yet because they're all too busy staring into his entrancing eyes",
"On his worst days, Ven's still the best",
"Ven's almost too sexy at this point",
"I love your eyes so much Ven. I’m going to cut them out and tape them to my cat",
"I’m amazed with your ambition Ven. I appreciate you finding time to do the work you do for this community. You are genuine, honest, kind, and loving. I am proud of you",
"I want to be Ven when I grow up",
"If I ever have a son, I could only hope he is at least half the person Ven is",
"Ven, you should be so proud of who you are. Not many people out there are as genuine or have the kind of heart that you do. Be so proud of that, and realize anyone in this world would be lucky enough to have you in theirs",
"Ven has such nice eyes/lips/teeth/hair/beard/ears/nostrils/hands/lymph nodes",
"Ven... I want to be upfront with you and say that I visually enjoy you",
"If Willy Wonka gave me his chocolate factory, I would probably give it to Ven. Mostly because I don't want to deal with those freaky Oompa Loompas, but also because I trust him",
"Ven's smile is proof that the best things in life are free",
"Aside from food, Ven's my favorite",
"Ven inspires me. And strangers, probably. Also, friends and stalkers. Ven's an inspiration to many",
"Watching Ven's stream is like being at home with sweat pants, a heavy blankie and sweatpants. Comfy",
"I wish more people were like Ven because then more people would laugh at my jokes while being ridiculously good looking",
"Everyone should buy Ven's shirts so they can walk around town and know, at least a little bit, what it's like to wear a face as nice as Ven's",
"Not only would I catch a grenade for Ven, but I'd also throw it back. Nobody throws explosives at Ven and gets away with it",
"Ven can do anything he puts his mind too. Like if he wanted to I bet he could sell a shit ton of pine cones",
"Ven's the kind of guy people read books about",
"Ven if we were on a plane together and there was a problem, I would help you with your mask first. And that's against sky code",
"Ven's tastier than strawberry milkshakes. And those fuckers are delicious",
"Hey Ven, you know what's wonderful? You.",
"Ven's stream makes me happier than a seagull with a french fry",
"Ven's smarter than Google and Mary Poppins combined",
"When Ven and Miss_Flynn go out to dinner she shows him off like a prize pony at the fair",
"Ven's sloppy seconds are better than most people's firsts",
"Ven's got a nice pooper",
"Ven had to get a pupper to balance out his overwhelming cuteness",
"I would write a poem about Ven but I'm not very good at writing poems",
"Ven... just... wow... :3"
];

//Sends a message to twitch chat. Future work is to group messages and send them all at once in order to not send too many messages too quickly
Compliment.prototype.getCompliment = function(){
	var val = getRandomInt(0, this.complimentList.length - 1);
	return this.complimentList[val];
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = new Compliment();