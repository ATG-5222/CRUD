const Text = require('../models/modelText');
const Media = require('../models/testMedia');

// Operaciones de Create ---------------

exports.getCreate = (req, res, next) => {
    res.render('create')
}

exports.postCreateText = (req, res, next) => {
    const text = req.body.nombreText;
    Text.insertRegister(text);
    res.redirect('/crud/read');
}

exports.postCreateMedia = (req, res, next) => {
    const text = req.body.nombreMedia;
    const media = req.body.media;
    console.log("Text",text);
    console.log("Media",media);
    res.status(200).json({code: 200, msg:"Ok"})
}

exports.postCreateFile = (req, res, next) => {
    
}

// Operaciones de Read -----------------

exports.getRead = (req, res, next) => {
    res.render('read')
}

exports.getReadText = async(req, res, next) => {
    const data  = await Text.fecthAll();
    res.status(200).json({code:200,code:"Ok",data:data[0]})
}

// Operaciones de Update ---------------

exports.getUpdate = (req, res, next) => {
    res.render('update')
}

exports.updateRegisterById = async(req, res, next) => {
    const id = req.params.id;
    const text = req.body.descripcion;
    await Text.updateRegisterById(id,text);
}

// Operaciones de Delete ---------------

exports.getDelete = (req, res, next) => {
    res.render('delete')
}

exports.deleteRegisterById = async(req, res, next) => {
    const id = req.params.id;
    await Text.deleteRegisterById(id);
}