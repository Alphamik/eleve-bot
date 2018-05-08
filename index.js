
const Discord = require("discord.js");
const bot = new Discord.Client();
const Google = require('./commands/google');
const moment = require('moment');

client.on('ready', () => {
   console.log(`(1) Logged in as ${bot.user.tag}!`);
   bot.user.setGame('donner cours de français');
   bot.setMaxListeners(1);
  });
// création d'une commande (message, reponse)

bot.on('message', function(message) { 	
    Google.parse(message)	
});
    
    bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "438731113561587724").send( member.user.toString() + ", Bienvenue Dans l'Ecole :wink: !");
    var role = member.guild.roles.find('name', 'Eleve');
    member.addRole(role);
    
});

// client secret
  bot.login(process.env.TOKEN);
