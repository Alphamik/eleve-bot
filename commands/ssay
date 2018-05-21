const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Ssay extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'ssay')
	}

	static action(message) {
		
			let args = message.content.split(" ").slice(1);
		if (message.author.id !== '423118623876448296')
   	if (message.author.id !== '301913733536415755')
	       return;
			message.delete()
			message.channel.send(args.join(" "))
	}
}
