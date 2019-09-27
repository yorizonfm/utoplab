module.exports = async(client) => {
    
        client.user.setActivity('Discord [ /help ]', { type: 'WATCHING' })
      .then(presence => console.log(`Activité réglée sur : regarde ${presence.game ? presence.game.name : 'none'}`))
      .catch(console.error);
        console.log("En ligne !");
    };