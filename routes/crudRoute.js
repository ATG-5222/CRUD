const express = require('express');
const router = express.Router();

const crudController = require('../controllers/controllerCRUD');

router.post('/create/text', crudController.postCreateText);
router.post('/create/file', crudController.postCreateFile);
router.get('/create', crudController.getCreate);

module.exports = router;