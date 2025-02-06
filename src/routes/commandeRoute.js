const express = require('express');
const router = express.Router();
const {
  getAllCommandes,
  createCommande,
  updateCommande,
  deleteCommande,
  getCommandesByDateRange,
  searchCommandes,
} = require('../controllers/commandeController');

// Routes pour les commandes
router.get('/commandes', getAllCommandes);
router.get('/commandes/date', getCommandesByDateRange);
router.get('/commandes/search', searchCommandes);
router.post('/commandes', createCommande);
router.put('/commandes/:id', updateCommande);
router.delete('/commandes/:id', deleteCommande);

module.exports = router;