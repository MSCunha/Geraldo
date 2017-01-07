const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MjY2NDcwODYzMTE5OTc0NDAw.C1Jn3g.-JOcKWvHT81NeyAgEgJgFtUdZ-4');

bot.on('message', (message) => {
    if(message.content == 'marco'){
        message.channel.sendMessage('polo');
    }
});