const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    codebar: String,
    price: Number
});

const Model = mongoose.model("itens", schema);

module.exports = Model