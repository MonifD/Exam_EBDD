// src/controllers/produitController.js
const { Produit } = require('../models');

// Récupérer tous les produits
const getAllProduits = async (req, res) => {
  try {
    const produits = await Produit.findAll();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un nouveau produit
const createProduit = async (req, res) => {
  const { nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id } = req.body;
  try {
    const produit = await Produit.create({ nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id });
    res.status(201).json(produit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un produit
const updateProduit = async (req, res) => {
  const { id } = req.params;
  const { nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id } = req.body;
  try {
    const [updated] = await Produit.update(
      { nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id },
      { where: { id } }
    );
    if (updated) {
      const updatedProduit = await Produit.findByPk(id);
      res.status(200).json(updatedProduit);
    } else {
      res.status(404).json({ message: 'Produit non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un produit
const deleteProduit = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Produit.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Produit supprimé' });
    } else {
      res.status(404).json({ message: 'Produit non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProduits,
  createProduit,
  updateProduit,
  deleteProduit,
};