const fs = require("fs");
const path = require("path");

exports.comando = (args, message, client, staff) => {
    const argumentos = args.join(" ").split("|");
    const scamers = require(path.normalize("../baseDeDatos/scamers.json"));
    scamers.push({ "nombre": argumentos[0], "id": argumentos[1], "motivo": argumentos[2] });

    fs.writeFileSync("../baseDeDatos/scamers.json", JSON.stringify(scamers));
};

exports.descripcion = "";
exports.uso = "m!añadir nombre|id|motivo";
exports.publico = false;