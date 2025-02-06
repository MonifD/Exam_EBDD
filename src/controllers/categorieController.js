const { Categories } = require('../models');

// Récupérer toutes les catégories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer une nouvelle catégorie
const createCategorie = async (req, res) => {
  const { nom } = req.body;
  try {
    const categorie = await Categories.create({ nom });
    res.status(201).json(categorie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une catégorie
const updateCategorie = async (req, res) => {
  const { id } = req.params;
  const { nom } = req.body;
  try {
    const [updated] = await Categories.update({ nom }, { where: { id } });
    if (updated) {
      const updatedCategorie = await Categories.findByPk(id);
      res.status(200).json(updatedCategorie);
    } else {
      res.status(404).json({ message: 'Catégorie non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une catégorie
const deleteCategorie = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Categories.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Catégorie supprimée' });
    } else {
      res.status(404).json({ message: 'Catégorie non trouvée' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCategories,
  createCategorie,
  updateCategorie,
  deleteCategorie,
};