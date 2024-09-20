const express = require('express');
const { GatewayIntentBits, ActivityType } = require('discord.js');
const Discord = require("discord.js")
const client = new Discord.Client({ intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildMembers', 'GuildInvites', 'DirectMessages', 'GuildPresences']});

const token = require("./propeties.json")

const Client = new Discord.Client({ 
    intents: [
      Discord.GatewayIntentBits.Guilds,              
      Discord.GatewayIntentBits.GuildMessages,
      Discord.GatewayIntentBits.MessageContent,
      Discord.GatewayIntentBits.GuildMembers,
      Discord.GatewayIntentBits.GuildPresences,
      Discord.GatewayIntentBits.DirectMessages,
      Discord.GatewayIntentBits.GuildInvites
  ]
    })
const app = express();
const port = 3000;  

client.once('ready', () => {
    console.log('Discord bot is ready!');
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({
        activities: [{ name: 'Rolling Dice', type: ActivityType.Playing }],
        status: 'online'
    });
});

Client.once('ready', () => {
    console.log('Discord bot is ready!');
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({
        activities: [{ name: 'Rolling Dice', type: ActivityType.Playing }],
        status: 'online'
    });
});



client.on('messageCreate', async (message) => {
if(message.author.bot) return;

    if (message.content === '!ping') {
        if (message.content === '!ping') {
            const sentMessage = await message.reply('Calculating ping...');
            const latency = sentMessage.createdTimestamp - message.createdTimestamp;
            const apiLatency = Math.round(client.ws.ping);
    
            sentMessage.edit(`🏓 Latency: ${latency}ms\n⌛ API Latency: ${apiLatency}ms \n\n Please Note: This is on beta and testing mode.`);
        }
    }
});

client.login(`MTI4Njc0Nzc3ODkwMjM5Njk2OA.GHf6b8.hHqRaKwNntmGr-SSqN8KEB2zEn5-5Bu1OIeKrs`);

app.get('/', (req, res) => {
    res.send('|| PLEASE DONT MESS WITH ANYTHING. || !--Hello--! || PLEASE DONT MESS ANYTHING ||');
});

const ipAddress = '192.168.56.1';

app.listen(port, async () => {
    console.log(`Running on http://${ipAddress}:${port}`)
})
