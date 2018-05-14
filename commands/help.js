const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Help extends Command {

	static match(message) {
  
  return message.content.startsWith(prefix + 'help')
	}

	static action(message) {
		var embed = new Discord.RichEmbed()
	        .setColor("#F39C12")
		.setAuthor('Liste des commandes :')
		.addField('Prefix :', + '`' + prefix + '`')
		.addField(':rotating_light: Administration', ' `clear`, `[en dev]`')
                .addField(':video_game: Fun', ' `say`, `[en dev]`')
                .addField(':mag_right: Recherche', ' `google`, `ytb`, `deezer`')
                .addField(':newspaper: Info', ' `stats[en dev]`, `invite[en dev]`, `discord[en dev]`, `ping[en dev]`, `profile[en dev]`')
                .setTimestamp()
		message.channel.send(embed)
    
	     }
  }
