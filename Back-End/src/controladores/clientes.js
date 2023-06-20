const bancoDeDados = require("../bancoDeDados/bancoDeDados.json");
const fs = require("fs/promises");
let id = bancoDeDados.clientes.length();

async function cadastrarCliente(req,res){
    const { nome,numeroDeCelular } = req.body;

    const leitura = await fs.readFile("../bancoDeDados/bancoDeDados.json");
    const parse  = JSON.parse(leitura);

    const cliente = {
        id,
        nome,
        numeroDeCelular
    }

    if(!nome){
        
    }
}