  const Discord = require("discord.js");
const bot = new Discord.Client();
//Classes command
const Google = require('./commands/google');
const Say = require('./commands/say');
const Youtube = require('./commands/youtube');
const Deezer = require('./commands/deezer');
const Clear = require('./commands/clear');
const Help = require('./commands/help');
const Blague = require('./commands/blague');
const Ssay = require('./commands/ssay');

//Librairie
const moment = require('moment');

//PREFIX
const prefix = '!!'

//Etat du bot
bot.on('ready', () => {
   console.log(`(1) Logged in as ${bot.user.tag}!`);
   bot.user.setGame('donner cours d\'italien || !!help');
   bot.setMaxListeners(1);
  });


bot.on('message', function(message) { 	
    Google.parse(message)	

    Say.parse(message)

    Youtube.parse(message)

    Deezer.parse(message)

    Clear.parse(message)

    Help.parse(message)
	
    Blague.parse(message)
	
    Ssay.parse(message)
	
  
	if (message.content === prefix + 'skribbl') {
	
	   var embed = new Discord.RichEmbed()
	   .setColor("#2980b9")
	   .setDescription('__**Toujours chaud pour un p\'tit skribbl !**__')
	    message.channel.send(embed)
	    message.channel.send('https://skribbl.io/')
	
	}
	
	 
});
    
    bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "438731113561587724").send( "Bienvenue à toi " + member.user.toString() + ",blablabla.");
    var role = member.guild.roles.find('name', "Eleves");
    member.addRole(role);
    
});

bot.on('message', function(message) {
  if (message.author.bot) return;
const args = message.content.split(" ");
let text = args.slice(0).join(" ");
if(message.channel.type === 'dm') return console.log("Nom : " + message.author.username + "#" + message.author.discriminator + " ID : " + message.author.id + " : " + text);
})
});
 

// client secret
  bot.login(process.env.TOKEN);
