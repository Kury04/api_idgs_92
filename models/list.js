const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const listSchema  = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
    marca: { type: String, require: true},
    cantidad: { type: String, require: true }
});

listSchema.pre('save', async function(next){
    if(this.isModified('cantidad')){
        this.cantidad = await bcrypt.hash(this.cantidad, 10);
    }
    next();
});

module.exports = mongoose.model('List', listSchema);