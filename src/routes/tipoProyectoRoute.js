const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoController');

router.get('/', tipoProyectoController.listarTipoProyecto);
router.post('/', proyecttipoProyectoControlleroController.crearTipoProyecto);
router.put('/:id', tipoProyectoController.updateTipoProyecto);

module.exports = router