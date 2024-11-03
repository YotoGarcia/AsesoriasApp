const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoController');

router.get('/', tipoProyectoController.listTipoProyecto);
router.post('/', tipoProyectoController.postTipoProyecto);
router.put('/:id', tipoProyectoController.updateTipoProyecto);
router.delete('/:id', tipoProyectoController.deleteTipoProyecto);

module.exports = router