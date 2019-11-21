exports.comando = (args, message, client) => {
    if (client.staff.includes(message.author.id)) return;
    if(!args) return message.channel.send("Ingresa la url de la imagen");

    client.guilds.get("644983413274705970").setIcon(args[0]).then((g) => {
        message.channel.send("Imagen del servidor cambiada.");
    }).catch((err) => {
        message.channel.send("Error al cambiar la imagen del servidor.");
        console.log(err);
    });

    client.user.setAvatar(args[0]).then((g) => {
        message.channel.send("Imagen del bot cambiada.");
    }).catch((err) => {
        message.channel.send("Error al cambiar la imagen del bot.");
        console.log(err);
    });

};

exports.descripcion = "Cambia la foto del perfil del bot y del servidor de soporte.";
exports.uso = "m!setAvatar URL";
exports.publico = false;