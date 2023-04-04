const express = require('express');
const router = express.Router();

const crudController = require('../controllers/crudController');

// Rutas
router.get('/create', crudController.getCreate);
router.post('/create', crudController.postCreate);

module.exports = router;