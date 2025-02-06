const { Produit, Lignes_Commande, Commandes } = require('../models');
const { Op } = require('sequelize');

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

// Récupérer les commandes contenant un produit spécifique
const getCommandesByProduit = async (req, res) => {
  const { id } = req.params;
  try {
    const lignesCommande = await Lignes_Commande.findAll({
      where: { produit_id: id },
      include: [{ model: Commandes, as: 'commande' }],
    });
    const commandes = lignesCommande.map((lc) => lc.commande);
    res.json(commandes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Statistiques des produits les plus vendus
const getMostSoldProducts = async (req, res) => {
  try {
    const produits = await Produit.findAll({
      include: [
        {
          model: Lignes_Commande,
          as: 'lignes_commande',
          attributes: [[sequelize.fn('SUM', sequelize.col('quantite')), 'total_quantity']],
        },
      ],
      group: ['Produit.id'],
      order: [[sequelize.literal('total_quantity'), 'DESC']],
    });
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Décrémenter le stock lors de la création d'une commande
const decrementStock = async (produit_id, quantite) => {
  const produit = await Produit.findByPk(produit_id);
  if (produit.quantite_stock >= quantite) {
    produit.quantite_stock -= quantite;
    await produit.save();
  } else {
    throw new Error('Stock insuffisant');
  }
};

// Récupérer les produits en stock faible
const getLowStockProducts = async (req, res) => {
  const { seuil } = req.query;
  try {
    const produits = await Produit.findAll({
      where: {
        quantite_stock: {
          [Op.lte]: seuil,
        },
      },
    });
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProduits,
  createProduit,
  updateProduit,
  deleteProduit,
  getCommandesByProduit,
  getMostSoldProducts,
  decrementStock,
  getLowStockProducts,
};