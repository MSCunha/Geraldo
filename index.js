const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MjY2NDcwODYzMTE5OTc0NDAw.C0-dRg.zhiN30HKI0BM6R5dAUarS6_1iOg');

bot.on('message', (message) => {
    if(message.content == 'marco'){
        message.channel.sendMessage('polo');
    }
});