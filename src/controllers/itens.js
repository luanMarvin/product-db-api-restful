const ItensModel = require("../models/itens")

async function get(req, res){
    const { id } = req.params

    const obj = id ? { _id: id } : null
    
    
    const produtos = await ItensModel.find(obj)
    res.send(produtos)
}

async function post(req, res){
    const {
        name,
        codebar,
        price
    } = req.body

    const register = new ItensModel({
        name,
        codebar,
        price
    });

    register.save();
    res.send(register);
}

async function put(req, res){
    const {id} = req.params;

    const item = await ItensModel.findOneAndUpdate({
        _id: id
    },  req.body,{
        new: true
    });

    res.send(item)
}

async function remove(req, res){
    const { id } = req.params;

    const remove = await ItensModel.deleteOne({_id:id})

    res.send({
        response: "Complete"
    })
}

module.exports = {
    get,
    post,
    put,
    remove}
