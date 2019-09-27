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

// Welcome message
client.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#000099")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("Salut "+ user + "! Bienvenue dans la communauté de **France Multigaming** 🎉🤗 ! Afin de voir __***les salons de jeux***__ te correspondant, merci de te reporter dans <#584335406917746689> . Je t'invite aussi à prendre connaissance des <#584335354031636481> et <#584326401935671299> ainsi que les règles pour les jeux auxquels tu pourrais participer :innocent:. Bon jeu!")
        .setFooter("France Multigaming");
    user.guild.channels.get("584055404955303936").send(joinEmbed);
});

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