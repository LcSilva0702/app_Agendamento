const {Router} = require("express");
const rotas = Router();

rotas.get("/", (req,res) => {
    res.status(200).send("teste");
});

module.exports = rotas;