const player = require('discordjs-ytdl-advanced')
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "çal",
    async run (client, message, args) {
        if (!args[0]) return message.channel.send('Lütfen Bir Şarkı İSmi Giriniz');
        if (message.member.voice.channel){
     const connection = await message.member.voice.channel.join()
     const şarkı = await player(args.join(" "))
     şarkı.play(connection)
     const embed = new MessageEmbed()
     .setTitle(şarkı.title)
     .setDescription(`Video: **[${şarkı.title}](${şarkı.url})**`)
     .setImage(şarkı.thumbnail)
     .addField("Video Süresi", `**${şarkı.time}**`)
     .setTimestamp()
     message.channel.send(embed)
 } else {
     message.reply('Lütfen Bir Sesli Kanala Geçiniz')
 }
 
    }    
}
