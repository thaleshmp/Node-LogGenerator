var expect = require('chai').expect;
var LoginParticipant = require('./../src/schemas/loginparticipantSchema');

describe('LoginParticipant', function(){
    it('should be invalid if name is object', function(){
        var l = new LoginParticipant({Nome: {a : 'a'}});
        l.validate(function(err){
            expect(err.errors.Nome).to.exist;
        });
    });
});