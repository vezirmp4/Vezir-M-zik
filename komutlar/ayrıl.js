module.exports = {
    kod: "ayrıl",
    async run (client, message, args) {
        if (!message.member.voice.channel) return message.channel.send('Sesli kanalda değilsiniz');
        if (!message.guild.me.voice.channel) return message.channel.send('Bot bir sesli kanalda değil')
        if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Bot ile aynı kanalda değilsiniz')
        message.member.voice.channel.leave()
        message.channel.send('Sesli Kanaldan Ayrıldım')
    }
}