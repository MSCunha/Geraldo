const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MjY2NDcwODYzMTE5OTc0NDAw.C1Jn3g.-JOcKWvHT81NeyAgEgJgFtUdZ-4');

bot.on('message', (message) => {
    if(message.content == 'marco?'){
        message.channel.sendMessage('polo!');
    }
    if(message.content == 'oquevocefaz?'){
        message.channel.tts('Nada, ainda estou sendo criado :)');
    }
    if(message.content == 'porquevoceficaoffline?'){
        message.channel.sendMessage('Eu tambem preciso dormir \n');
        message.channel.sendMessage('--mentira, o servidor é gratuito e tem suas limitações-- "sshiii"');
    }
    if(message.content == '!comandos'){
        message.channel.sendMessage('1- marco?\n2- oquevocefaz?\n3- porquevoceficaoffline?\n')    }
});