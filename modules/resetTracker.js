module.exports = {
    reset: resetTracker
}

// resets the tracker to a given message
function resetTracker(message, client) {
    if (!client.tracker.messages.includes(message.id)) {
        const fs = require("fs")
        client.tracker.date = new Date()
        client.tracker.count++
        client.tracker.lastMessage = message.url
        client.tracker.messages.push(message.id)
        fs.writeFile("./tracker.json", JSON.stringify(client.tracker, null, 4), function(err) {
            if (err) throw err
            message.react("⏲️")
        })
    }
}
