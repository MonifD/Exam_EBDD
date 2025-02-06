module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

  Categories.associate = (models) => {
    Categories.hasMany(models.Produit, {
      foreignKey: 'categorie_id',
      as: 'produits',
    });
  };

  return Categories;
};