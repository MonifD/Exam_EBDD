const { Client } = require('../models');

// Récupérer tous les clients
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un nouveau client
const createClient = async (req, res) => {
  const { nom, prenom, adresse, tel } = req.body;
  try {
    const client = await Client.create({ nom, prenom, adresse, tel });
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un client
const updateClient = async (req, res) => {
  const { id } = req.params;
  const { nom, prenom, adresse, tel } = req.body;
  try {
    const [updated] = await Client.update({ nom, prenom, adresse, tel }, { where: { id } });
    if (updated) {
      const updatedClient = await Client.findByPk(id);
      res.status(200).json(updatedClient);
    } else {
      res.status(404).json({ message: 'Client non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un client
const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Client.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Client supprimé' });
    } else {
      res.status(404).json({ message: 'Client non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer les commandes d'un client
const getCommandesByClient = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findByPk(id, {
      include: [{ model: Commandes, as: 'commandes' }],
    });
    if (client) {
      res.json(client.commandes);
    } else {
      res.status(404).json({ message: 'Client non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
  getCommandesByClient,
};