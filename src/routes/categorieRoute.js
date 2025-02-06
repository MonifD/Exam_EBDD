// src/routes/categorieRoute.js
const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  createCategorie,
  updateCategorie,
  deleteCategorie,
} = require('../controllers/categorieController');

// Routes pour les catégories
router.get('/categories', getAllCategories);
router.post('/categories', createCategorie);
router.put('/categories/:id', updateCategorie);
router.delete('/categories/:id', deleteCategorie);

module.exports = router;