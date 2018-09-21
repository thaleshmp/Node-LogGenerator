var mongoose = require('mongoose');

var loginParticipanteSchema = require('./../schemas/loginparticipantSchema');

var LoginParticipant = mongoose.model('LoginParticipant', loginParticipanteSchema);

function findAll(){
    return LoginParticipant.find({});
}

function count(){
    return LoginParticipant.countDocuments({});
}

function insertOne(login){
    var loginParticipantEntity = new LoginParticipant({
        DataAcesso: login.DataAcesso,
        Campanha: login.Campanha,
        Ip: login.Ip,
        Dispositivo: login.Dispositivo,
        Navegador: login.Navegador,
        Cpf: login.Cpf,
        Nome: login.Nome,
        Cargo: login.Cargo
    });

    loginParticipantEntity.save();
}

function insertMany(logins){
    return LoginParticipant.insertMany(logins);
}

module.exports = {findAll, count, insertOne, insertMany};
