const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

router.get('/', proyectoController.listarProyecto);
router.post('/', proyectoController.crearProyecto);
router.put('/:id', proyectoController.updateProyecto);

module.exports = router