const { Categories, Fournisseurs, Client, Produit, Commandes, Lignes_Commande } = require('../models');

async function insertData() {
  try {
    // Insertion des catégories
    await Categories.bulkCreate([
      { nom: 'Avions de chasse' },
      { nom: 'Avions civils' },
      { nom: 'Avions militaires' },
      { nom: 'Avions historiques' },
      { nom: 'Avions de ligne' },
      { nom: 'Avions privés' },
      { nom: 'Avions de course' },
      { nom: 'Avions expérimentaux' },
      { nom: 'Avions de transport' },
      { nom: 'Avions agricoles' },
    ]);

    // Insertion des fournisseurs
    await Fournisseurs.bulkCreate([
      { nom: 'Dupont', prenom: 'Jean', adresse: '1 Rue de Paris, 75001 Paris', tel: '+33123456789' },
      { nom: 'Martin', prenom: 'Pierre', adresse: '2 Rue de Lyon, 69001 Lyon', tel: '+33456789123' },
      { nom: 'Bernard', prenom: 'Paul', adresse: '3 Rue de Marseille, 13001 Marseille', tel: '+33789123456' },
      { nom: 'Thomas', prenom: 'Jacques', adresse: '4 Rue de Bordeaux, 33000 Bordeaux', tel: '+33567891234' },
      { nom: 'Robert', prenom: 'Michel', adresse: '5 Rue de Lille, 59000 Lille', tel: '+33345678912' },
      { nom: 'Richard', prenom: 'André', adresse: '6 Rue de Nice, 06000 Nice', tel: '+33456789123' },
      { nom: 'Petit', prenom: 'Philippe', adresse: '7 Rue de Toulouse, 31000 Toulouse', tel: '+33567891234' },
      { nom: 'Durand', prenom: 'Patrick', adresse: '8 Rue de Nantes, 44000 Nantes', tel: '+33234567891' },
      { nom: 'Leroy', prenom: 'François', adresse: '9 Rue de Strasbourg, 67000 Strasbourg', tel: '+33345678912' },
      { nom: 'Moreau', prenom: 'Nicolas', adresse: '10 Rue de Montpellier, 34000 Montpellier', tel: '+33456789123' },
    ]);

    // Insertion des clients
    await Client.bulkCreate([
      { nom: 'Lefebvre', prenom: 'Marie', adresse: '11 Rue de Paris, 75002 Paris', tel: '+33123456789' },
      { nom: 'Leroy', prenom: 'Sophie', adresse: '12 Rue de Lyon, 69002 Lyon', tel: '+33456789123' },
      { nom: 'Moreau', prenom: 'Luc', adresse: '13 Rue de Marseille, 13002 Marseille', tel: '+33789123456' },
      { nom: 'Simon', prenom: 'Julie', adresse: '14 Rue de Bordeaux, 33001 Bordeaux', tel: '+33567891234' },
      { nom: 'Laurent', prenom: 'Thomas', adresse: '15 Rue de Lille, 59001 Lille', tel: '+33345678912' },
      { nom: 'Michel', prenom: 'Laura', adresse: '16 Rue de Nice, 06001 Nice', tel: '+33456789123' },
      { nom: 'David', prenom: 'Antoine', adresse: '17 Rue de Toulouse, 31001 Toulouse', tel: '+33567891234' },
      { nom: 'Bertrand', prenom: 'Camille', adresse: '18 Rue de Nantes, 44001 Nantes', tel: '+33234567891' },
      { nom: 'Roux', prenom: 'Émilie', adresse: '19 Rue de Strasbourg, 67001 Strasbourg', tel: '+33345678912' },
      { nom: 'Fournier', prenom: 'Alexandre', adresse: '20 Rue de Montpellier, 34001 Montpellier', tel: '+33456789123' },
    ]);

    // Insertion des produits
    await Produit.bulkCreate([
      { nom: 'F-16 Fighting Falcon', prix_unitaire: 29.99, quantite_stock: 50, categorie_id: 1, fournisseur_id: 1 },
      { nom: 'Boeing 747', prix_unitaire: 39.99, quantite_stock: 30, categorie_id: 2, fournisseur_id: 2 },
      { nom: 'Spitfire', prix_unitaire: 19.99, quantite_stock: 20, categorie_id: 4, fournisseur_id: 3 },
      { nom: 'Airbus A380', prix_unitaire: 49.99, quantite_stock: 25, categorie_id: 5, fournisseur_id: 4 },
      { nom: 'Cessna 172', prix_unitaire: 24.99, quantite_stock: 40, categorie_id: 6, fournisseur_id: 5 },
      { nom: 'Concorde', prix_unitaire: 34.99, quantite_stock: 15, categorie_id: 5, fournisseur_id: 6 },
      { nom: 'P-51 Mustang', prix_unitaire: 27.99, quantite_stock: 35, categorie_id: 4, fournisseur_id: 7 },
      { nom: 'Gulfstream G650', prix_unitaire: 59.99, quantite_stock: 10, categorie_id: 6, fournisseur_id: 8 },
      { nom: 'Antonov An-225', prix_unitaire: 69.99, quantite_stock: 5, categorie_id: 9, fournisseur_id: 9 },
      { nom: 'Crop Duster', prix_unitaire: 14.99, quantite_stock: 60, categorie_id: 10, fournisseur_id: 10 },
    ]);

    // Insertion des commandes
    await Commandes.bulkCreate([
      { client_id: 1, date_commande: '2023-10-01 10:00:00', statut: 'En cours' },
      { client_id: 2, date_commande: '2023-10-02 11:00:00', statut: 'Livrée' },
      { client_id: 3, date_commande: '2023-10-03 12:00:00', statut: 'En cours' },
      { client_id: 4, date_commande: '2023-10-04 13:00:00', statut: 'Livrée' },
      { client_id: 5, date_commande: '2023-10-05 14:00:00', statut: 'En cours' },
      { client_id: 6, date_commande: '2023-10-06 15:00:00', statut: 'Livrée' },
      { client_id: 7, date_commande: '2023-10-07 16:00:00', statut: 'En cours' },
      { client_id: 8, date_commande: '2023-10-08 17:00:00', statut: 'Livrée' },
      { client_id: 9, date_commande: '2023-10-09 18:00:00', statut: 'En cours' },
      { client_id: 10, date_commande: '2023-10-10 19:00:00', statut: 'Livrée' },
    ]);

    // Insertion des lignes de commande
    await Lignes_Commande.bulkCreate([
      { commande_id: 1, produit_id: 1, quantite: 2, prix_unitaire_applique: 29.99 },
      { commande_id: 2, produit_id: 2, quantite: 1, prix_unitaire_applique: 39.99 },
      { commande_id: 3, produit_id: 3, quantite: 3, prix_unitaire_applique: 19.99 },
      { commande_id: 4, produit_id: 4, quantite: 1, prix_unitaire_applique: 49.99 },
      { commande_id: 5, produit_id: 5, quantite: 2, prix_unitaire_applique: 24.99 },
      { commande_id: 6, produit_id: 6, quantite: 1, prix_unitaire_applique: 34.99 },
      { commande_id: 7, produit_id: 7, quantite: 4, prix_unitaire_applique: 27.99 },
      { commande_id: 8, produit_id: 8, quantite: 1, prix_unitaire_applique: 59.99 },
      { commande_id: 9, produit_id: 9, quantite: 1, prix_unitaire_applique: 69.99 },
      { commande_id: 10, produit_id: 10, quantite: 5, prix_unitaire_applique: 14.99 },
    ]);

    console.log('Données insérées avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données :', error);
  }
}

module.exports = insertData;