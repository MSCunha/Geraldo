const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MjY2NDcwODYzMTE5OTc0NDAw.C1Jn3g.-JOcKWvHT81NeyAgEgJgFtUdZ-4');

bot.on('message', (message) => {
    if(message.content == 'marco'){
        message.channel.sendMessage('polo!');
    }
    if(message.content == 'geraldo, o que você faz?'){
        message.channel.sendMessage('/tts Nada, ainda estou sendo criado :)');
    }
    if(message.content == 'Porque você fica offline?'){
        message.channel.sendMessage('Eu tambem preciso dormir \n');
        message.channel.sendMessage('--mentira, o servidor é gratuito e tem suas limitações-- "sshiii"');
    }
    if(message.content == '!comandos'){
        message.channel.sendMessage('marco\ngeraldo, o que você faz?\nPorque você fica offline\n')
    }
});