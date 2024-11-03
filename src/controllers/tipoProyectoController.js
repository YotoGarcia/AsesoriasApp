const TipoProyecto = require('../models/tipoProyectoModel'); 

exports.listTipoProyecto = async (req, res) => {
    try {
        const tiposProyecto = await TipoProyecto.find(); 
        return res.json(tiposProyecto);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.postTipoProyecto = async (req, res) => {
    const tipoProyecto = new TipoProyecto(req.body); 
    try {
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.updateTipoProyecto = async (req, res) => {
    try {
        const updatedTipoProyecto = await TipoProyecto.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!updatedTipoProyecto) {
            return res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
        }
        return res.status(200).json({ message: 'Tipo de proyecto actualizado con éxito', tipoProyecto: updatedTipoProyecto });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.deleteTipoProyecto = async (req, res) => {
    try {
        const deleteTipoProyecto = await TipoProyecto.findByIdAndDelete(req.params.id); 
        if (!deleteTipoProyecto) {
            return res.status(404).json({ message: 'Tipo de proyecto no encontrado' });
        }
        return res.status(200).json({ message: 'Tipo de proyecto eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
