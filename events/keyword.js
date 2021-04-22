module.exports = {
    listener: "message",
    execute(message, client) {
        if (message.author.id !== client.user.id && !message.content.startsWith(client.config.prefix)) {
            for (word of client.config.keywords) {
                const regex = new RegExp('\\b' + word + '\\b', 'i')
                if (regex.test(message.content)) {
                    const resetTracker = require("../modules/resetTracker.js")
                    resetTracker.reset(message, client)
                }
            }
        }
    }
}
