module.exports = {
    name: "removekeyword",
    description: "jumps to the last mention of a keyword",
    aliases: ["removekw", "remove", "rm", "rmkw"],
    adminOnly: true,
    execute(message, args) {
        const fs = require("fs")
        let keyword = args.join(" ")
        if (message.client.config.keywords.includes(keyword)) {
            message.client.config.keywords.splice(message.client.config.keywords.indexOf(keyword), 1)
            fs.writeFile("./config.json", JSON.stringify(message.client.config, null, 4), function(err) {
                if (err) throw err
                message.channel.send(`\`\`${keyword}\`\` is no longer a keyword`)
            })
        }
    }
}
