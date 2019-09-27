const Dicord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avait pas les permissions !`).catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Je n'ai pas la permission !`).catch(console.error);

    if(!args[0]) return message.channel.send(`Vous de spécifier un nomdre de messages à supprimer !`);

    if(isNaN(args[0])) return message.channel.send(`Veullez spécifier un nombre !`);

    message.channel.bulkDelete(args[0]);

    message.channel.send(`${args[0]} message ont été supprimés !`);
};

module.exports.help = {
    name: "clear"
}