const minimist = require('minimist');
var mongoose = require('mongoose');
var faker = require('faker');
var gerarCpf = require('gerar-cpf');
const args = minimist(process.argv.slice(2));

mongoose.connect('mongodb://localhost:27017', {
    dbName: 'kimberlyLog'
});

var loginparticipantRepository = require('./repositories/loginparticipantRepository');

var numberOfSimulations = args.i ? args.i : 10;

console.log(args.i ? 'No iterations parameter were provided, running by the default value (10)' : 'Providing ' + args.i + ' logs');

var logins = [];

for (var i = 0; i < numberOfSimulations; i++) {
    logins.push({
        DataAcesso: Date.now(),
        Campanha: 1,
        Ip: '192.168.1.' + i,
        Dispositivo: 'Mobile',
        Navegador: 'Chrome',
        Cpf: gerarCpf('xxx.xxx.xxx-xx'),
        Nome: faker.name.findName(),
        Cargo: 1
    });
}

loginparticipantRepository.insertMany(logins).then((result) => {
    console.log('Total of ' + numberOfSimulations + ' logs were inserted');
});