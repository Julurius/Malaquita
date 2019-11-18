const { RichEmbed } = require("discord.js");

exports.comando = (args, message, client) => {
    if (client.blackList.includes(message.author.id)) return message.channel.send("Usted esta bloqueado contacte con un administrador por privado para apelar.");
    if (!args[0]) return message.channel.send("Intenta convencernos de que ya no eres ladron. :bulb:");

    const embed = new RichEmbed()
        .setTitle("Nueva apelacion:")
        .setDescription(args.join(" "));
    client.channels.get("645381628448735321").send(embed);

};

exports.descripcion = "Intenta convencer a los admins que ya no eres ladron.";
exports.uso = "m!apelar mensaje de apelacion y/o disculpas.";
exports.publico = true;