module.exports = {
    listener: "message",
    execute(message, client) {
        const fs = require("fs")
        if (message.author.id !== client.user.id) {
            for (word of client.config.keywords) {
                if (message.content.includes(word)) {
                    client.tracker.date = new Date()
                    client.tracker.count++
                    client.tracker.lastMessage = message.id
                    fs.writeFile("./tracker.json", JSON.stringify(client.tracker, null, 4), function(err) {
                        if (err) throw err
                        message.react("⏲️")
                    })
                }
            }
        }
    }
}
