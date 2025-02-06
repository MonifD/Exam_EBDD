const { Sequelize, DataTypes } = require('sequelize'); // Importez Sequelize et DataTypes
const config = require('../config/config'); // Importez la configuration

const sequelize = new Sequelize(config.development);

const Categories = require('./Categories')(sequelize, DataTypes);
const Fournisseurs = require('./Fournisseurs')(sequelize, DataTypes);
const Client = require('./Client')(sequelize, DataTypes);
const Produit = require('./Produit')(sequelize, DataTypes);
const Commandes = require('./Commandes')(sequelize, DataTypes);
const Lignes_Commande = require('./Lignes_Commande')(sequelize, DataTypes);

Categories.hasMany(Produit, { foreignKey: 'categorie_id', as: 'produits' });
Produit.belongsTo(Categories, { foreignKey: 'categorie_id', as: 'categorie' });

Fournisseurs.hasMany(Produit, { foreignKey: 'fournisseur_id', as: 'produits' });
Produit.belongsTo(Fournisseurs, { foreignKey: 'fournisseur_id', as: 'fournisseur' });

Client.hasMany(Commandes, { foreignKey: 'client_id', as: 'commandes' });
Commandes.belongsTo(Client, { foreignKey: 'client_id', as: 'client' });

Commandes.hasMany(Lignes_Commande, { foreignKey: 'commande_id', as: 'lignes_commande' });
Lignes_Commande.belongsTo(Commandes, { foreignKey: 'commande_id', as: 'commande' });

Produit.hasMany(Lignes_Commande, { foreignKey: 'produit_id', as: 'lignes_commande' });
Lignes_Commande.belongsTo(Produit, { foreignKey: 'produit_id', as: 'produit' });

module.exports = {
  sequelize,
  Categories,
  Fournisseurs,
  Client,
  Produit,
  Commandes,
  Lignes_Commande,
};