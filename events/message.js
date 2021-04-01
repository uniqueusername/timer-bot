module.exports = {
    name: "message",
    execute(message, client) {
        // return if message doesn't start with command prefix
        if (!message.content.startsWith(client.config.prefix) || message.author.bot) return

        // determine command
        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/)
        const commandString = args.shift().toLowerCase()
        const command = client.commands.get(commandString)
            || client.commands.find(command => command.aliases && command.aliases.includes(commandString))
        if (!command) return

        // execute command with context
        if (command.adminOnly && message.author.id == client.config.adminID) {
            try {
                command.execute(message, args)
            } catch (err) {
                console.error(err)
            }
        } else if (!command.adminOnly) {
            try {
                command.execute(message, args)
            } catch (err) {
                console.error(err)
            }
        }
    }
}
