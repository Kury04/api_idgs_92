const list = require('../models/list');
const List = require('../models/list');

exports.register = async (req, res) => {
    try {
        const {nombre, cantidad, marca} = req.body;
        let list = new List({ nombre, marca, cantidad});
        list = await list.save();
        res.status(200).send(list);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.listProduct = async (req, res) => {
    try {
        const list = await List.find({}, '_id nombre marca cantidad');
        res.status(200).send(list);
    } catch (error) {
        res.status(500).send('Error interno');

    }
}