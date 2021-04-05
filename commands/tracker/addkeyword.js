module.exports = {
    name: "addkeyword",
    description: "jumps to the last mention of a keyword",
    aliases: ["addkw", "add"],
    adminOnly: true,
    execute(message, args) {
        const fs = require("fs")
        let keyword = args.join(" ")
        if (!message.client.config.keywords.includes(keyword)) {
            message.client.config.keywords.push(keyword)
            fs.writeFile("./config.json", JSON.stringify(message.client.config, null, 4), function(err) {
                if (err) throw err
                message.channel.send(`\`\`${keyword}\`\` is now a keyword`)
            })
        } else {
            message.channel.send(`\`\`${keyword}\`\` is already a keyword`)
        }
    }
}
