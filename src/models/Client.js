module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
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
  
    Client.associate = (models) => {
      Client.hasMany(models.Commandes, {
        foreignKey: 'client_id',
        as: 'commandes',
      });
    };
  
    return Client;
  };