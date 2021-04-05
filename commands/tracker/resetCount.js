module.exports = {
    name: "resetCount",
    aliases: ["reset"],
    description: "reset keyword counter",
    execute(message, args) {
        const fs = require("fs")
        message.client.tracker.count = 0
        fs.writeFile("./tracker.json", JSON.stringify(message.client.tracker, null, 4), function(err) {
            if (err) throw err
            message.react("✅")
        })
    }
}
