const { inspect } = require("util");
const { RichEmbed } = require("discord.js");

exports.comando = (args, message, client) => {
    if (!client.staff.includes(message.author.id)) return;

    const argumentos = args.join(" ").split("|");

    client.user.setPresence({
        "status": argumentos[0],
        "game": {
            "name": argumentos[2],
            "type": argumentos[1]
        }
    });
    const embed = new RichEmbed()
        .setTitle("ESTADO ACTUAL")
        .addField("estado", argumentos[0])
        .addField("tipo", argumentos[1])
        .addField("texto", argumentos[2])

};

exports.descripcion = "Actualiza el stado del bot.";
exports.uso = "m!status estado|tipo|texto";
exports.publico = false;