module.exports = {
    name: "count",
    description: "number of time keywords have been mentioned",
    execute(message, args) {
        message.channel.send(`the timer has been reset \`\`${message.client.tracker.count}\`\` times`)
    }
}
