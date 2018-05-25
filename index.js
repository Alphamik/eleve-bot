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

//OWNER
const ownermik = '301913733536415755'
const ownerspec = '423118623876448296'
//Etat du bot
bot.on('ready', () => {
   console.log(`(1) Logged in as ${bot.user.tag}!`);
   bot.user.setActivity(`donner cours d'italien dans ${bot.guilds.size} serveur || !!help`, {type: "PLAYING"});
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
    
Essaie ça 
bot.on('message', function(message) {
  if (message.author.bot)
    return;
  const args = message.content.split(" ");
  let text = args.slice(0).join(" ");

  function send(attachment){
    var embed = new Discord.RichEmbed()
    .setColor("#2980b9")
    .setDescription(`Nom: ${message.author.username}#${message.author.discriminator}\nID: ${message.author.id}\nMessage: ${text}`)
    .setThumbnail(message.author.avatarURL)
    if(attachment)
      embed.setImage(attachment.url);
    if(message.channel.type === 'dm')
      return bot.channels.get('447993889882767360').sendMessage(embed);
  }
  var attachments = message.attachments.array();
  if(attachments[0])
    attachments.map(send);
  else
    send();
});
 
 
 
 
	


// client secret
  bot.login(process.env.TOKEN);

//if (message.attachments) message.channel.send(message.attachments[Object.keys(m.attachments)[0]].url); 
