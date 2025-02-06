const express = require('express');
const router = express.Router();
const {
  getAllProduits,
  createProduit,
  updateProduit,
  deleteProduit,
  getCommandesByProduit,
  getMostSoldProducts,
  getLowStockProducts,
} = require('../controllers/produitController');

// Routes pour les produits
router.get('/produits', getAllProduits);
router.get('/produits/:id/commandes', getCommandesByProduit);
router.get('/produits/most-sold', getMostSoldProducts);
router.get('/produits/stock-faible', getLowStockProducts);
router.post('/produits', createProduit);
router.put('/produits/:id', updateProduit);
router.delete('/produits/:id', deleteProduit);

module.exports = router;