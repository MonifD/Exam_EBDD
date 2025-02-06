// src/routes/produitRoute.js
const express = require('express');
const router = express.Router();
const {
  getAllProduits,
  createProduit,
  updateProduit,
  deleteProduit,
} = require('../controllers/produitController');

// Routes pour les produits
router.get('/produits', getAllProduits);
router.post('/produits', createProduit);
router.put('/produits/:id', updateProduit);
router.delete('/produits/:id', deleteProduit);

module.exports = router;