const express = require('express');
const { sequelize } = require('./src/models'); 
const { initializeDatabase } = require('./src/database/creationDB');
const insertData = require('./src/database/insertData');

const app = express();
app.use(express.json());

require('dotenv').config();

async function startServer() {
    try {
      await initializeDatabase();
  
      // Testez la connexion à la base de données
      await sequelize.authenticate();
      console.log('Connexion à la base de données réussie.');
  
      // Synchronisez les modèles avec la base de données (optionnel)
      await sequelize.sync({ alter: true });
      console.log('Base de données synchronisée.');
  
      await insertData();
  
      // Démarrer le serveur
      const PORT = 3000;
      app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
      });
    } catch (err) {
      console.error('Erreur lors du démarrage du serveur :', err);
    }
}
  
startServer();