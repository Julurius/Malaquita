const { inspect } = require("util");

exports.comando = (args, message, client) => {
    if (!client.staff.includes(message.author.id)) return;


};

exports.descripcion = "Actualiza el stado del bot.";
exports.uso = "m!status ";
exports.publico = false;