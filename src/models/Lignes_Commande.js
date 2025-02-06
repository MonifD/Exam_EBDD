module.exports = (sequelize, DataTypes) => {
    const Lignes_Commande = sequelize.define('Lignes_Commande', {
      quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      prix_unitaire_applique: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    Lignes_Commande.associate = (models) => {
      Lignes_Commande.belongsTo(models.Commandes, {
        foreignKey: 'commande_id',
        as: 'commande',
      });
      Lignes_Commande.belongsTo(models.Produit, {
        foreignKey: 'produit_id',
        as: 'produit',
      });
    };
  
    return Lignes_Commande;
  };