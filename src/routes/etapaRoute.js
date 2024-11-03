const express = require('express');
const router = express.Router();
const etapaController = require('../controllers/etapaController');

router.get('./', etapaController.listaClientes);
router.post('./', etapaController.crearClientes);
router.put('./', etapaController.updateClientes);

module.exports = router;