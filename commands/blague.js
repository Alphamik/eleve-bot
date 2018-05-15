const Discord = require('discord.js');
const Command = require('./command')
const prefix = '!!'

module.exports = class Blague extends Command {



	static match(message) {
		return message.content.startsWith(prefix + 'blague')
	}

	static action(message) {

		let randnum = Math.floor(Math.random() * 2)

		if (randnum == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Qu\'est-ce qui a un oeil, deux dents et trois jambes? \n__**Réponse:**__ Ta mère.')
			.setFooter('Les meilleures blagues de Monsieur Peche')
			message.channel.sendEmbed(embed)

		} else if(randnum == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Dans un asile, un fou se promène avec une laisse avec, accrochée au bout, une brosse a dent. Un gardien de prison, sachant qu\’il est fou, lui dit : \n– Il est beau votre chien.  \nLe fou le regarde bizarrement et lui dit : \n– De quoi parlez-vous ? Ce n\’est pas un chien, mais une brosse à dents ! Le gardien, un peu confus, décide de s\'en aller. Le fou regarde alors sa brosse à dents et lui dit : \n– On l\’a bien eu, hein, Rex ?')
			.setFooter('Les meilleures blagues de Monsieur Peche')
			message.channel.sendEmbed(embed)

		} 
			

	}



}
