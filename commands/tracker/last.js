module.exports = {
    name: "last",
    description: "states time since last mention of a keyword",
    execute(message, args) {
        let elapsed = new Date() - new Date(message.client.tracker.date)
        if (elapsed < 60000) {
            message.channel.send(`\`\`${(elapsed / 1000).toFixed(0)}\`\` seconds since last trigger`)
        } else if (elapsed < 3600000) {
            message.channel.send(`\`\`${Math.floor(elapsed / 60000)}\`\` minutes and \`\`${((elapsed % 60000) / 1000).toFixed(0)}\`\` seconds since last trigger`)
        } else if (elapsed < 86400000) {
            message.channel.send(`\`\`${Math.floor(elapsed / 3600000)}\`\` hours \`\`${Math.floor((elapsed % 3600000) / 60000)}\`\` minutes and \`\`${Math.floor((elapsed % 60000) / 1000).toFixed(0)}\`\` seconds since last trigger`)
        } else if (elapsed < 2073600000) {
            message.channel.send(`\`\`${Math.floor(elapsed / 86400000)}\`\` days \`\`${Math.floor((elapsed % 86400000) / 3600000)}\`\` hours \`\`${Math.floor((elapsed % 3600000) / 60000)}\`\` minutes and \`\`${Math.floor((elapsed % 60000) / 1000)}\`\` seconds since last trigger`)
        }
    }
}
