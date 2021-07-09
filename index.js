const Discord = require("discord.js");
const client = new Discord.Client();

client.login("ODYyMDM4OTM5Mjk2MzMzODY1.YOSiUw.nXebsNMlUZQQxGIPgdPmuYhbh_M");


client.on('guildMemberAdd', (member) => {
client.channels.cache.get("862038117850021898").send("Benvenuto " + member.ToString() + " in " + member.guild.name+ ", sei il" + member.guild.memberCount + "membro");



}) 