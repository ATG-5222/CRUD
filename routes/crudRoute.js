const express = require('express');
const router = express.Router();

const crudController = require('../controllers/controllerCRUD');

//Create
router.post('/create/text', crudController.postCreateText);
router.post('/create/media', crudController.postCreateMedia);
router.post('/create/file', crudController.postCreateFile);
router.get('/create', crudController.getCreate);
//Read
router.get('/read/obtener_texto', crudController.getReadText);
router.get('/read', crudController.getRead);
//Update

//Delete

module.exports = router;