module.exports = (sequelize, DataTypes) => {
    const Produit = sequelize.define('Produit', {
      nom: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      prix_unitaire: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantite_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Produit.associate = (models) => {
      Produit.belongsTo(models.Categories, {
        foreignKey: 'categorie_id',
        as: 'categorie',
      });
      Produit.belongsTo(models.Fournisseurs, {
        foreignKey: 'fournisseur_id',
        as: 'fournisseur',
      });
      Produit.hasMany(models.Lignes_Commande, {
        foreignKey: 'produit_id',
        as: 'lignes_commande',
      });
    };
  
    return Produit;
  };