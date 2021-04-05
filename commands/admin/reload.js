module.exports = {
    name: "reload",
    description: "reloads one command module",
    adminOnly: true,
    execute(message, args) {
        const fs = require("fs")

        // determine command
        const commandString = args[0].toLowerCase()
        const command = message.client.commands.get(commandString)
            || message.client.commands.find(command => command.aliases && command.aliases.includes(commandString))
        if (command) {
            const commandFolders = fs.readdirSync("./commands/")
            const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandString}.js`))

            // reload command
            delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)]
            try {
                const newCommand = require(`../${folderName}/${command.name}.js`)
                message.client.commands.set(newCommand.name, newCommand)
                message.channel.send(`\`\`${message.client.config.prefix}${newCommand.name}\`\` reloaded`)
            } catch(err) {
                console.error(err)
            }
        }
    }
}
