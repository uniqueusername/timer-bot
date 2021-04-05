module.exports = {
    name: "keywords",
    description: "lists the current keywords",
    aliases: ["kw"],
    execute(message, args) {
        let keywordString = ""
        for (keyword of message.client.config.keywords) {
            keywordString += keyword + ", "
        }
        message.channel.send(keywordString.slice(0, -2))
    }
}
