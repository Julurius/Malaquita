const { inspect } = require("util");

exports.comando = (args, message, client) => {
    if (!client.staff.includes(message.author.id)) return;

    try {
        const evaluado = inspect(eval(args.join(" ")));
        message.channel.send("```xl\n" + evaluado + "  ```");
    } catch (err) {
        message.channel.send("```xl\n" + err + "  ```");
    };

};

exports.descripcion = "Evalua codigo.";
exports.uso = "m!eval ...args";
exports.publico = false;