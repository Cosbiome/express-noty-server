const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let conteoCosbiome = new Schema({
    numClientes: {
        type: Number
    },
    numRutas: {
        type: Number
    }
});

module.exports = mongoose.model('conteosCosbiome', conteoCosbiome);