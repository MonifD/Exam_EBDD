// src/controllers/fournisseurController.js
const { Fournisseurs } = require('../models');

// Récupérer tous les fournisseurs
const getAllFournisseurs = async (req, res) => {
  try {
    const fournisseurs = await Fournisseurs.findAll();
    res.json(fournisseurs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un nouveau fournisseur
const createFournisseur = async (req, res) => {
  const { nom, prenom, adresse, tel } = req.body;
  try {
    const fournisseur = await Fournisseurs.create({ nom, prenom, adresse, tel });
    res.status(201).json(fournisseur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un fournisseur
const updateFournisseur = async (req, res) => {
  const { id } = req.params;
  const { nom, prenom, adresse, tel } = req.body;
  try {
    const [updated] = await Fournisseurs.update({ nom, prenom, adresse, tel }, { where: { id } });
    if (updated) {
      const updatedFournisseur = await Fournisseurs.findByPk(id);
      res.status(200).json(updatedFournisseur);
    } else {
      res.status(404).json({ message: 'Fournisseur non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un fournisseur
const deleteFournisseur = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Fournisseurs.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Fournisseur supprimé' });
    } else {
      res.status(404).json({ message: 'Fournisseur non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllFournisseurs,
  createFournisseur,
  updateFournisseur,
  deleteFournisseur,
};