module.exports = {
    name: "jump",
    description: "jumps to the last mention of a keyword",
    execute(message, args) {
        message.channel.send(message.client.tracker.lastMessage)
    }
}
