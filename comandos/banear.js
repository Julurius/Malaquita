const { normalize } = require("path");

exports.comando = (args, message, client) => {

    if (!args) return message.channel.send("Debes aceptar que ciertas personas seran prohibidas en tu servidor.");
    if (args[0].toLocaleLowerCase != "acepto") return message.channel.send("Debes aceptar que ciertas personas seran prohibidas en tu servidor.");

    const scamers = require(normalize("../baseDeDatos/scamers.json"));

    for (var x = 0; x < scamers.length; x++) {
        message.guild.ban(scamers[x].id, { reason: scamers[x].motivo });
    };

};

exports.descripcion = "Bloqueas permanentemente (se le puede retirar) a todos los ladrones en tu servidor.";
exports.uso = "m!banear acepto";
exports.publico = true;