module.exports = {
    listener: "message",
    execute(message, client) {
        if (message.author.id !== client.user.id && !message.content.startsWith(client.config.prefix)) {
            for (word of client.config.keywords) {
                if (message.content.toLowerCase().includes(word.toLowerCase())) {
                    const resetTracker = require("../modules/resetTracker.js")
                    resetTracker.reset(message, client)
                }
            }
        }
    }
}
