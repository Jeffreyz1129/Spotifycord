const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const client = new Client();

let CLIENT_ID = "The bot's client id"
let IMAGE = "The name of the image"
let SONG = "The name of the song"
let ARTIST = "The artist of the song"

client.on("ready", () => {
    rpcGenerator.getRpcImage(CLIENT_ID, IMAGE)
    .then(image => {
    let presence = rpcGenerator.createSpotifyRpc(client)
    .setApplicationId(CLIENT_ID)
    .setAssetsLargeImage(image.id)
    .setDetails(SONG)
    .setState(ARTIST)
    client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})

keepAlive()
client.login(TOKEN);
