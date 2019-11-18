const { RichEmbed } = require("discord.js");

exports.comando = (args, message, client) => {
    if (client.blackList.includes(message.author.id)) return message.channel.send("Usted esta bloqueado contacte con un administrador por privado para apelar.");

    const argumentos = args.join(" ").split("|");
    const embed = new RichEmbed()
        .setTitle("Reporte resivido")
        .setDescription("Usuario que reporto " + message.author.tag + " su id " + message.author.id)
        .addField("Nombre de epicgames", argumentos[0])
        .addField("evidencia", argumentos[1])
        .addField("nombre de discord", argumentos[2])
        .addField("id de discord", argumentos[3]);

    client.channels.get("645110717216849941").send(embed);
    message.channel.send("Reporte enviado.");

};

exports.descripcion = "Reportas a un posible ladron.";
exports.uso = "m!reportar Link con evidencia|nombre de discord|id de discord";
exports.publico = true;