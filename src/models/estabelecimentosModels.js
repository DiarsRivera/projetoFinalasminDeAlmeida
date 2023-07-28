const mongoose = require('mongoose');

const estabelecimentosSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String, 
        required: true
    },
    cnpj: {
        type: Number, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    endereco : {
        type: String,
        require: true
    },
    telefone: {
        type: Number
    },
    tipoEstabelecimento: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model("cadastro", estabelecimentosSchema)