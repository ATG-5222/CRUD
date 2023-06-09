const express = require('express');
const router = express.Router();

const crudController = require('../controllers/controllerCRUD');

//Create
router.post('/create/text', crudController.postCreateText);
router.post('/create/media',crudController.postCreateMedia);
//router.post('/create/file', crudController.postCreateFile);
router.get('/create', crudController.getCreate);
//Read
router.get('/read/obtener_texto', crudController.getReadText);
router.get('/read/obtener_media', crudController.getReadMedia);
router.get('/read', crudController.getRead);
//Update
router.put('/update/actualizar_registro/text/:id', crudController.updateRegisterById);
router.put('/update/actualizar_registro/media/:id', crudController.updateRegisterById);
router.get('/update', crudController.getUpdate);
//Delete
router.delete('/delete/eliminar_registro/text/:id', crudController.deleteTextById);
router.delete('/delete/eliminar_registro/media/:id', crudController.deleteMediaById);
router.get('/delete', crudController.getDelete);

module.exports = router;