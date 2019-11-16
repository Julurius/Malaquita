const { RichEmbed } = require("discord.js");

exports.comando = (args, message, client) => {

    let outPublico = "";
    client.cmds.filter((cmd) => cmd.publico).array().forEach((cmd) => {
        outPublico += `${cmd.uso.trim()} - ${cmd.descripcion.trim()}\n`;
    });
    const embedPublico = new RichEmbed().setTitle("Comandos").setDescription(outPublico);
    message.channel.send(embedPublico);

    if (!client.staff.includes(message.author.id)) return;

    let outPrivado = "";
    client.cmds.array().forEach((cmd) => {
        outPrivado += `${cmd.uso.trim()} - ${cmd.descripcion.trim()}\n`;
    });
    const embedPrivado = new RichEmbed().setTitle("Comandos").setDescription(outPrivado);
    message.author.send(embedPrivado);

};

exports.descripcion = "Muestra el menu de ayuda.";
exports.uso = "m!ayuda"
exports.publico = false;