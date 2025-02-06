module.exports = (sequelize, DataTypes) => {
    const Commandes = sequelize.define('Commandes', {
      date_commande: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      statut: {
        type: DataTypes.ENUM('En cours', 'Livrée'),
        allowNull: false,
      },
    });
  
    Commandes.associate = (models) => {
      Commandes.belongsTo(models.Client, {
        foreignKey: 'client_id',
        as: 'client',
      });
      Commandes.hasMany(models.Lignes_Commande, {
        foreignKey: 'commande_id',
        as: 'lignes_commande',
      });
    };
  
    return Commandes;
  };