// src/controllers/ligneCommandeController.js
const { Lignes_Commande } = require('../models');

// Récupérer toutes les lignes de commande
const getAllLignesCommande = async (req, res) => {
  try {
    const lignesCommande = await Lignes_Commande.findAll();
    res.json(lignesCommande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer une nouvelle ligne de commande
const createLigneCommande = async (req, res) => {
  const { commande_id, produit_id, quantite, prix_unitaire_applique } = req.body;
  try {
    const ligneCommande = await Lignes_Commande.create({ commande_id, produit_id, quantite, prix_unitaire_applique });
    res.status(201).json(ligneCommande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une ligne de commande
const updateLigneCommande = async (req, res) => {
  const { id } = req.params;
  const { commande_id, produit_id, quantite, prix_unitaire_applique } = req.body;
  try {
    const [updated] = await Lignes_Commande.update(
      { commande_id, produit_id, quantite, prix_unitaire_applique },
      { where: { id } }
    );
    if (updated) {
      const updatedLigneCommande = await Lignes_Commande.findByPk(id);
      res.status(200).json(updatedLigneCommande);
    } else {
      res.status(404).json({ message: 'Ligne de commande non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une ligne de commande
const deleteLigneCommande = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Lignes_Commande.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Ligne de commande supprimée' });
    } else {
      res.status(404).json({ message: 'Ligne de commande non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllLignesCommande,
  createLigneCommande,
  updateLigneCommande,
  deleteLigneCommande,
};