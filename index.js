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
	
bot.on('message', function(message) {
  if (message.author.bot)
    return;
  const args = message.content.split(" ");
  let text = args.slice(0).join(" ");

  if(message.channel.type === 'dm')
    return bot.channels.get('447993889882767360').send({
      embed: {
        color: 2719929,
        description: `Nom: ${message.author.username}#${message.author.discriminator}\nID: ${message.author.id}\nMessage: ${text}`,
        thumbnail: {
          url: message.author.avatarURL
        }
      },
      files: message.attachments.array().map(a => a.url)
    });
});
 

bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "381463169433993218").send( "Bienvenue à toi " + member.user.toString() + ", tu es actuellement demandeur d'asile et la population risque d'être hostile à ton égard. Il te suffit de t'entretenir avec Monsieur Pêche pour qu'il te donne tes papiers et ainsi devenir citoyen.");
    var role = member.guild.roles.find('name', "Membre");
    member.addRole(role);
    
});

 
 
 
	


// client secret
  bot.login(process.env.TOKEN);

//if (message.attachments) message.channel.send(message.attachments[Object.keys(m.attachments)[0]].url); 
