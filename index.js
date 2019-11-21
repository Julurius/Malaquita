const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
const http = require("http");
const client = new Discord.Client({
    fetchAllMembers: true
});

const server = http.createServer((resive, respuesta) => {
    respuesta.end("Hola");
}).listen(8989);

client.on("ready", () => {

    console.log("Discord Bot listo!");
    

    client.user.setPresence({
        "status": "online",
        "game": {
            "name": "Usa m!ayuda para reportar a un usuario.",
            "type": "PLAYING"
        }
    });

    client.cmds = new Discord.Collection();
    client.blackList = [];
    client.staff = [];



    let cmds = fs
        .readdirSync(path.join(__dirname, "comandos/")).filter((c) => c.endsWith(".js"));
    cmds.forEach((cmd) => {
        let nombreCmd = cmd.split(".")[0];
        let archivoCmd = require(`./comandos/${cmd}`);
        client.cmds.set(nombreCmd, archivoCmd);
    });
    console.log(`Cargados ${cmds.length} comandos correctamente!`);
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith("m!")) return;

    let args = message.content.slice(2).split(/ +/g);
    let cmd = args.shift().toLowerCase();

    const ejecucion = client.cmds.get(cmd);

    if (!ejecucion) return;

    ejecucion.comando(args, message, client);

});

client.login("");