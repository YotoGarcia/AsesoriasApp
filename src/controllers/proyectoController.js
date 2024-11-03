const Proyecto = require('../models/proyectoModel'); 

exports.listProyecto = async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        return res.json(proyectos);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.postProyecto = async (req, res) => {
    const proyecto = new Proyecto(req.body); 
    try {
        await proyecto.save();
        return res.status(201).json(proyecto);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.updateProyecto = async (req, res) => {
    try {
        const updatedProyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!updatedProyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        return res.status(200).json({ message: 'Proyecto actualizado con éxito', proyecto: updatedProyecto });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.deleteProyecto = async (req, res) => {
    try {
        const deleteProyecto = await Proyecto.findByIdAndDelete(req.params.id); 
        if (!deleteProyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        return res.status(200).json({ message: 'Proyecto eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
