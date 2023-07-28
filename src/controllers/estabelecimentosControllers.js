const estabelecimentosModels = require('../models/estabelecimentosModels');
const { query } = require('express');


const todosOsEstabelecimentos = async (req, res) => {
    const cadastro = await estabelecimentosModels.find({ query })
    res.status(200).json(cadastro)
}

const pesquisarPorId = async (req, res) => {
    try {
        const cadastro = await estabelecimentosModels.findById(req.params.id)
    res.status(200).json(cadastro)

    } catch(error) {
    return res.status(500).send({
        message: error.message})
    }
}

const abriCadastro = async (req, res) => {
    const { nome, cnpj, email, endereco, telefone, tipoEstabelecimento} = req.body
        const cadastro = new estabelecimentosModels({
            nome: nome,
            cnpj: cnpj,
            email: email,
            endereco: endereco,
            telefone: telefone,
            tipoEstabelecimento: tipoEstabelecimento,
        })
        const salvarCadastro = await cadastro.save();
        return res.status(201).json({
            statusCode:201,
            message: 'Cadastro feito :D',
            cadastro: salvarCadastro
        })
}


const updatePorId = async (req, res) => {
    const { nome, cnpj, email, endereco, telefone, tipoEstabelecimento } = req.body;

        const procurarCadastro = await estabelecimentosModels.findById(req.params.id)
        
        if (!procurarCadastro) {
        res.status(404).send({
        statusCode: 404,
        message:`seu cadastro de id ${req.params.id} não foi achado :(`})
    }
    try {
        procurarCadastro.nome = nome || procurarCadastro.nome;
        procurarCadastro.cnpj = cnpj || procurarCadastro.cnpj;
        procurarCadastro.email = email || procurarCadastro.email;
        procurarCadastro.endereco = endereco || procurarCadastro.endereco;
        procurarCadastro.telefone = telefone || procurarCadastro.telefone;
        procurarCadastro.tipoEstabelecimento = tipoEstabelecimento || procurarCadastro.tipoEstabelecimento;
        
        const cadastroAtualizado = await procurarCadastro.save()
        res.status(200).send({
        message: 'Cadastro atualizado :3', 
        cadastro: cadastroAtualizado});

    } catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const deletarCadastro = async (req, res) => {
    const { id } = req.params
        const procurarCadastro = await estabelecimentosModels.findById(id)

        if(!procurarCadastro) {
        res.status(404).send({
            statusCode: 404,
            message: `não achamos o cadastro ${id} :(`})
        }
        await procurarCadastro.delete()

        return res.status(200).send({
        statusCode: 200,
        message: 'Cadastro deletado!'
    })
}

module.exports = {
    abriCadastro,
    todosOsEstabelecimentos,
    pesquisarPorId,
    updatePorId,
    deletarCadastro
}