module.exports = {
    listener: "message",
    execute(message, client) {
        const fs = require("fs")
        if (message.author.id !== client.user.id && !message.content.startsWith(client.config.prefix)) {
            for (word of client.config.keywords) {
                if (message.content.toLowerCase().includes(word.toLowerCase())) {
                    client.tracker.date = new Date()
                    client.tracker.count++
                    client.tracker.lastMessage = message.url
                    fs.writeFile("./tracker.json", JSON.stringify(client.tracker, null, 4), function(err) {
                        if (err) throw err
                        message.react("⏲️")
                    })
                }
            }
        }
    }
}
