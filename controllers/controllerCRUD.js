const Text = require('../models/modelText');

exports.getCreate = (req, res, next) => {
    res.render('create')
}

exports.postCreateText = (req, res, next) => {
    console.log("Controller crud - create - text")
    const text = req.body.nombreText;
    console.log(text);
    Text.insertRegister(text);
    //res.status(200);
    res.redirect('/');
}

exports.postCreateFile = (req, res, next) => {
    
}

exports.getRead = (req, res, next) => {
    res.render('read')
}

exports.getUpdate = (req, res, next) => {
    res.render('update')
}

exports.getDelete = (req, res, next) => {
    res.render('delete')
}