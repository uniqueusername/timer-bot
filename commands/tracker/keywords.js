module.exports = {
    name: "keywords",
    aliases: ["kw"],
    description: "states time since last mention of a keyword",
    execute(message, args) {
        let keywordString = ""
        for (keyword of message.client.config.keywords) {
            keywordString += keyword + ", "
        }
        message.channel.send(keywordString.slice(0, -2))
    }
}
