const Discord = require("discord.js");
const client = new Discord.Client({
    fetchAllMembers: true
});
const staff = ["643677540866719744"];

client.on("ready", () => {

    client.cmds = new Map();

    require("fs").readdirSync("comandos/").forEach((nombre) => {
        if (!nombre.endsWith(".js")) return;
        client.cmds.set(nombre, require("./comandos/" + nombre));
    });

});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith("m!")) return;
    
    let args = message.content.slice(2).split(/ +/g);
    let cmd = args.shift().toLowerCase();

    const ejecucion = client.cmds.get(cmd);

    if(!ejecucion) return;

    ejecucion.comando(args, message, client, staff);

});

