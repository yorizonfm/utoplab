const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();
    if(!membre) return message.channel.send('Veuillez mentionner un utilisateur ! (***exemple* : ** /stats @utilisateur)');

    message.channel.send({
        embed: {
            color: 0x000099,
            title: `Statistiques de l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL    
            },
            fields: [
                {
                name: "ID :",
                value: membre.id
                },
                {
                    name: "Créé le :",
                    value: moment.utc(membre.user.createdAt).format("L")
                },
                {
                    name: "Jeu :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Ne jou pas actuellement"}`
                },
                {
                    name: "Rejoint le :",
                    value: moment.utc(membre.joinedAt).format("L")
                }
            ],
            footer: {
                text: `Information de l'utilisateur ${membre.user.username}`
            }
        }
    });
};

module.exports.help = {
    name: "stats"
};