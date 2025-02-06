module.exports = (sequelize, DataTypes) => {
    const Fournisseurs = sequelize.define('Fournisseurs', {
      nom: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      adresse: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    });
  
    Fournisseurs.associate = (models) => {
      Fournisseurs.hasMany(models.Produit, {
        foreignKey: 'fournisseur_id',
        as: 'produits',
      });
    };
  
    return Fournisseurs;
  };