var mongoose = require('mongoose');

var baseSchema = require('./baseSchema');

const { ObjectId, Schema } = baseSchema;

var schema = new Schema({
    Id: ObjectId,
    Campanha: Number,
    Ip: String,
    Dispositivo: String,
    Navegador: String,
    Cpf: String,
    Nome: String,
    Cargo: String,
    DataAcesso: Date
}, {collection: 'loginparticipantDEV', versionKey: false})

module.exports = mongoose.model('LoginParticipant', schema);