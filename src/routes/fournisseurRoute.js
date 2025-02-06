// src/routes/fournisseurRoute.js
const express = require('express');
const router = express.Router();
const {
  getAllFournisseurs,
  createFournisseur,
  updateFournisseur,
  deleteFournisseur,
} = require('../controllers/fournisseurController');

// Routes pour les fournisseurs
router.get('/fournisseurs', getAllFournisseurs);
router.post('/fournisseurs', createFournisseur);
router.put('/fournisseurs/:id', updateFournisseur);
router.delete('/fournisseurs/:id', deleteFournisseur);

module.exports = router;