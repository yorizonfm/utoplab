const Discord = require("discord.js");

// Client instance
var client = new Discord.Client();

// Initialize commands collection
client.commands = new Discord.Collection();

for(const x of ['ban', 'kick', 'clear', 'ping']) {
    console.info('Load command', x);
     // Build path
    const path = `./Commandes/${x}.js`;
    // Import command
    const command = require(path);
    // Inject command
    client.commands.set(command.help.name, command);
}

for(const x of ['message', 'ready']) {
    console.info('Load event', x);
     // Build path
    const path = `./Events/${x}.js`;
    // Import event
    const event = require(path);
    // Inject event
    client.on(x, event.bind(null, client));
}

// Config
const prefix = "/";

// Help
client.on("message", message=>{
    if (!message.guild) return

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setColor("#000099")
            .setDescription("**__Liste des commandes :__**\n\n ***__Utilisateur__***\n\n**/ping** `Savoir si le Bot est en ligne et obtenir sa latence.`\n\n**/stats** `Obtenir les statistiques d'un utilisateur.`\n\n ***__Admin__***\n\n**/kick** `Expulser utilisateur via le Bot`\n\n**/ban** `Bannir utilisateur via le bot`\n\n**/clear** `Supprimer le nombre de message souhaité`")
            .setFooter("France Multigaming");
        message.channel.sendEmbed(embed);
    }

});

// Authentication
client.login(process.env.TOKEN);
