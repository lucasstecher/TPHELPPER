const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    cpf:{
        type:String,
        required: true,
        unique: true
    },
    telefone:{
        type:String,
        required: true,
        unique: true
    },
    cep:{
        type:String,
        required: true
    },
    logadouro:{
        type:String,
        required: true
    },
    numero:{
        type:String,
        required: true
    },
    bairro:{
        type:String,
        required: true
    },
    cidade:{
        type:String,
        required: true

    },
    estado:{
        type:String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;