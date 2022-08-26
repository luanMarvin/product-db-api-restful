const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    codebar: Number,
    price: Number
});

const Model = mongoose.model("itens", schema);

module.exports = Model