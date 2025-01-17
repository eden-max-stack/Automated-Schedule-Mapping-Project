const mongoose = require('mongoose');

const templates = new mongoose.Schema({
    name: { type: String, required: true},
    desc: { type: String, required: true},
    email: { type: String, required: true},

});

const NewTemplates = mongoose.model('newtemplates', templates, 'newtemplates');

module.exports = NewTemplates;