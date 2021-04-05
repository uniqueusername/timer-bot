module.exports = {
    listener: "messageReactionAdd",
    execute(reaction, user, client) {
        if (client.config.adminIDs.includes(user.id) && reaction.emoji.name === client.config.adminEmoji) {
            const resetTracker = require("../modules/resetTracker.js")
            resetTracker.reset(reaction.message, client)
        }
    }
}
