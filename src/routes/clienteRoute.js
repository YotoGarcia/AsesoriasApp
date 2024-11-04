const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.listCliente);
router.post('/', clienteController.postCliente);
router.put('/id', clienteController.updateCliente);
router.delete('/id', clienteController.deleteCliente);

module.exports = router
