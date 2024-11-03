const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.listarClientes);
router.post('/', clienteController.crearClientes);
router.put('/:id', clienteController.updateClientes);

module.exports = router
