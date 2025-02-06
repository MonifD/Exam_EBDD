const express = require('express');
const router = express.Router();
const {
  getAllLignesCommande,
  createLigneCommande,
  updateLigneCommande,
  deleteLigneCommande,
} = require('../controllers/ligneCommandeController');

// Routes pour les lignes de commande
router.get('/lignes_commande', getAllLignesCommande);
router.post('/lignes_commande', createLigneCommande);
router.put('/lignes_commande/:id', updateLigneCommande);
router.delete('/lignes_commande/:id', deleteLigneCommande);

module.exports = router;