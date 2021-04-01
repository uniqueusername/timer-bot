module.exports = {
    name: "ping",
    description: "test api response",
    execute(message, args) {
        message.channel.send("pong, ``" + message.client.ws.ping + "`` ms")
    }
}
