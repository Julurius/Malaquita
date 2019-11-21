const fs = require("fs");
const path = require("path");

exports.comando = (args, message, client) => {
    if (client.staff.includes(message.author.id)) return;

    try {
        const argumentos = args.join(" ").split("|");
        const scamers = require(path.normalize("../baseDeDatos/scamers.json"));
        scamers.push({ "nombre": argumentos[0], "id": argumentos[1], "motivo": argumentos[2] });

        fs.writeFileSync("../baseDeDatos/scamers.json", JSON.stringify(scamers));

        message.channel.send("Se añadio a el usuario a la base de datos.");
    } catch (err) {
        message.channel.send("Hubo un error" + err);
    };
};

exports.descripcion = "Añades a un ladron a la lista.";
exports.uso = "m!añadir nombre|id|motivo";
exports.publico = false;