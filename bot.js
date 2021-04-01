// initialization
'use strict'

// constants
const prompt = require("prompt")
const fs = require("fs")
const Discord = require("discord.js")
const client = new Discord.Client()

// variables
let config

// processes
prompt.start()
loadConfig()
loadCommands()
loadListeners()

// loads bot configuration from `config.json` and logs in to discord api
// creates new `config.json` with default values if it does not already exist
function loadConfig() {
    if (fs.existsSync("config.json")) {
        config = JSON.parse(fs.readFileSync("config.json"))
        client.config = config
        console.log("read configuration from `config.json`")
        client.login(config.token)
        console.log("api login successful!")
    } else {
        console.log('no config file found, provide a bot token')
        config = {}
        prompt.get(["token"]).then(newTokenConfig => {
            config = newTokenConfig
            config.prefix = "_"
            client.config = config
            fs.writeFile("config.json", JSON.stringify(config, null, 4), function(err) {
                if (err) throw err
                console.log("saved config to `config.json`")
                client.login(config.token)
                console.log("api login successful!")
            })
        })
    }
}

// loads all commands from commands folder
function loadCommands() {
    client.commands = new Discord.Collection()
    const commandFolders = fs.readdirSync("./commands")
    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"))
        for (const file of commandFiles) {
            const command = require(`./commands/${folder}/${file}`)
            client.commands.set(command.name, command)
        }
    }
}

// loads all event listeners from the events folder
function loadListeners() {
    const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"))
    for (const file of eventFiles) {
        const event = require(`./events/${file}`)
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client))
        } else {
            client.on(event.name, (...args) => event.execute(...args, client))
        }
    }
}
