// src/routes/clientRoute.js
const express = require('express');
const router = express.Router();
const {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
  getCommandesByClient,
} = require('../controllers/clientController');

// Routes pour les clients
router.get('/clients', getAllClients);
router.get('/clients/:id/commandes', getCommandesByClient);
router.post('/clients', createClient);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

module.exports = router;