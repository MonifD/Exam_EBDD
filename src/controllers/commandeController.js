// src/controllers/commandeController.js
const { Commandes } = require('../models');

// Récupérer toutes les commandes
const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commandes.findAll();
    res.json(commandes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer une nouvelle commande
const createCommande = async (req, res) => {
  const { client_id, date_commande, statut } = req.body;
  try {
    const commande = await Commandes.create({ client_id, date_commande, statut });
    res.status(201).json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une commande
const updateCommande = async (req, res) => {
  const { id } = req.params;
  const { client_id, date_commande, statut } = req.body;
  try {
    const [updated] = await Commandes.update({ client_id, date_commande, statut }, { where: { id } });
    if (updated) {
      const updatedCommande = await Commandes.findByPk(id);
      res.status(200).json(updatedCommande);
    } else {
      res.status(404).json({ message: 'Commande non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une commande
const deleteCommande = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Commandes.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Commande supprimée' });
    } else {
      res.status(404).json({ message: 'Commande non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lister les commandes par période
const getCommandesByDateRange = async (req, res) => {
    const { start, end } = req.query;
    try {
      const commandes = await Commandes.findAll({
        where: {
          date_commande: {
            [Op.between]: [new Date(start), new Date(end)],
          },
        },
      });
      res.json(commandes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

module.exports = {
  getAllCommandes,
  createCommande,
  updateCommande,
  deleteCommande,
  getCommandesByDateRange,
};