const express = require('express');
const router = express.Router();
const etapaController = require('../controllers/etapaController');

router.get('/', etapaController.listEtapa);
router.post('/', etapaController.postEtapa);
router.put('/:id', etapaController.updateEtapa);
router.delete('/:id', etapaController.deleteEtapa);

module.exports = router;