const Cliente = require('../models/clienteModel');

exports.listCliente = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.postCliente = async (req, res) => {
    const cliente = new Cliente(req.body); 
    try {
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const updatedClient = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClient) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        return res.status(200).json({ message: 'Cliente actualizado con éxito', cliente: updatedClient });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const deleteClient = await Cliente.findByIdAndDelete(req.params.id);
        if (!deleteClient) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        return res.status(200).json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};
