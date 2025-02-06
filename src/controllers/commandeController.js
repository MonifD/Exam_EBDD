const { Commandes, Lignes_Commande } = require('../models'); // Suppression de Client et Produit inutiles
const { Op } = require('sequelize');
const { decrementStock } = require('./produitController');

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
  const { client_id, date_commande, statut, produits } = req.body; // produits est un tableau d'objets { produit_id, quantite }

  // Validation des données
  if (!client_id || !date_commande || !statut || !produits || !Array.isArray(produits)) {
    return res.status(400).json({ message: 'Données de commande invalides' });
  }

  try {
    // Créer la commande
    const commande = await Commandes.create({ client_id, date_commande, statut });

    for (const produit of produits) {
      if (!produit.produit_id || !produit.quantite || !produit.prix_unitaire_applique) {
        return res.status(400).json({ message: 'Données de produit invalides' });
      }

      await Lignes_Commande.create({
        commande_id: commande.id,
        produit_id: produit.produit_id,
        quantite: produit.quantite,
        prix_unitaire_applique: produit.prix_unitaire_applique,
      });

      await decrementStock(produit.produit_id, produit.quantite);
    }

    res.status(201).json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une commande
const updateCommande = async (req, res) => {
  const { id } = req.params;
  const { client_id, date_commande, statut } = req.body;

  // Validation des données
  if (!client_id || !date_commande || !statut) {
    return res.status(400).json({ message: 'Données de commande invalides' });
  }

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

  // Validation des dates
  if (!start || !end) {
    return res.status(400).json({ message: 'Les dates de début et de fin sont requises' });
  }

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

// Recherche multi-critères
const searchCommandes = async (req, res) => {
  const { client_id, start, end, statut, produit_id } = req.query;
  const whereClause = {};

  if (client_id) whereClause.client_id = client_id;
  if (statut) whereClause.statut = statut;
  if (start && end) {
    whereClause.date_commande = {
      [Op.between]: [new Date(start), new Date(end)],
    };
  }

  try {
    const commandes = await Commandes.findAll({
      where: whereClause,
      include: [
        {
          model: Lignes_Commande,
          as: 'lignes_commande',
          where: produit_id ? { produit_id } : {},
        },
      ],
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
  searchCommandes,
};