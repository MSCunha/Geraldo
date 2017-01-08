const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MjY2NDcwODYzMTE5OTc0NDAw.C1Jn3g.-JOcKWvHT81NeyAgEgJgFtUdZ-4');

bot.on('message', (message) => {
    if(message.content == 'marco?'){
        message.channel.sendMessage('polo!');
    }
    if(message.content == 'qvcfaz?'){
        message.channel.sendMessage('Nada, ainda estou sendo criado :)',{tts:true});
    }
    if(message.content == 'pqvcficaoffline?'){
        message.channel.sendMessage('Eu tambem preciso dormir \n');
        message.channel.sendMessage('~~mentira, o servidor é gratuito e tem suas limitações~~ "sshiii"');
    }
    if(message.content == '!comandos'){
        message.channel.sendMessage('1- marco?\n2- qvcfaz?\n3- pqvcficaoffline?\n')
    }
    if(message.content == '!vemprapedra!'){
        message.channel.sendFile('https://media.giphy.com/media/3o7TKEJuETmXR6f9fO/giphy.gif')
    }
    if(message.content == '!saidapedra!'){
        message.channel.sendFile('https://68.media.tumblr.com/1ab432141e6ecebe6f736622ceb761b5/tumblr_oa4cuwZbV71ukxlx4o1_500.gif')
    }
});    