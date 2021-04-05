module.exports = {
    listener: "messageReactionAdd",
    execute(reaction, user, client) {
        if (user.id === client.config.adminID && reaction.emoji.name === client.config.adminEmoji) {
            const resetTracker = require("../modules/resetTracker.js")
            resetTracker.reset(reaction.message, client)
        }
    }
}
