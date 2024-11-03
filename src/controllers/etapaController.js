const Etapa = require('../models/etapaModel'); 

exports.listEtapa = async (req, res) => {
    try {
        const etapas = await Etapa.find(); 
        return res.json(etapas);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.postEtapa = async (req, res) => {
    const etapa = new Etapa(req.body); 
    try {
        await etapa.save();
        return res.status(201).json(etapa);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.updateEtapa = async (req, res) => {
    try {
        const updatedEtapa = await Etapa.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!updatedEtapa) {
            return res.status(404).json({ message: 'Etapa no encontrada' });
        }
        return res.status(200).json({ message: 'Etapa actualizada con éxito', etapa: updatedEtapa });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.deleteEtapa = async (req, res) => {
    try {
        const deleteEtapa = await Etapa.findByIdAndDelete(req.params.id);
        if (!deleteEtapa) {
            return res.status(404).json({ message: 'Etapa no encontrada' });
        }
        return res.status(200).json({ message: 'Etapa eliminada correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

