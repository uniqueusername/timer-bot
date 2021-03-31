// initialization
'use strict'

// constants
const Discord = require('discord.js')
const client = new Discord.Client()
const prompt = require('prompt')
const fs = require('fs')

// variables
let config

// processes
prompt.start()

// loads bot configuration from `config.json` and logs in to discord api
// creates new `config.json` with provided token if it does not already exist
function loadConfig() {
    if (fs.existsSync("config.json")) {
        config = JSON.parse(fs.readFileSync("config.json"))
        console.log("read configuration from `config.json`")
        client.login(config.token)
    } else {
        console.log('no config file found, provide a bot token')
        config = {}
        prompt.get(["token"]).then(newTokenConfig => {
            config = newTokenConfig
            fs.writeFile("config.json", JSON.stringify(config, null, 4), function(err) {
                if (err) throw err
                console.log("saved config to `config.json`")
                client.login(config.token)
            })
        })
    }
}

client.once('ready', () => {
    console.log("api login successful!")
})

loadConfig()
