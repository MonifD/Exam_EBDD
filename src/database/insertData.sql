-- Insertions de données de test dans la table Categories
INSERT INTO `Categories` (`nom`) VALUES
('Avions de chasse'),
('Avions civils'),
('Avions militaires'),
('Avions historiques'),
('Avions de ligne'),
('Avions privés'),
('Avions de course'),
('Avions expérimentaux'),
('Avions de transport'),
('Avions agricoles');

-- Insertions de données de test dans la table Fournisseurs
INSERT INTO `Fournisseurs` (`nom`, `prenom`, `adresse`, `tel`) VALUES
('Dupont', 'Jean', '1 Rue de Paris, 75001 Paris', '+33123456789'),
('Martin', 'Pierre', '2 Rue de Lyon, 69001 Lyon', '+33456789123'),
('Bernard', 'Paul', '3 Rue de Marseille, 13001 Marseille', '+33789123456'),
('Thomas', 'Jacques', '4 Rue de Bordeaux, 33000 Bordeaux', '+33567891234'),
('Robert', 'Michel', '5 Rue de Lille, 59000 Lille', '+33345678912'),
('Richard', 'André', '6 Rue de Nice, 06000 Nice', '+33456789123'),
('Petit', 'Philippe', '7 Rue de Toulouse, 31000 Toulouse', '+33567891234'),
('Durand', 'Patrick', '8 Rue de Nantes, 44000 Nantes', '+33234567891'),
('Leroy', 'François', '9 Rue de Strasbourg, 67000 Strasbourg', '+33345678912'),
('Moreau', 'Nicolas', '10 Rue de Montpellier, 34000 Montpellier', '+33456789123');

-- Insertions de données de test dans la table Client
INSERT INTO `Client` (`nom`, `prenom`, `adresse`, `tel`) VALUES
('Lefebvre', 'Marie', '11 Rue de Paris, 75002 Paris', '+33123456789'),
('Leroy', 'Sophie', '12 Rue de Lyon, 69002 Lyon', '+33456789123'),
('Moreau', 'Luc', '13 Rue de Marseille, 13002 Marseille', '+33789123456'),
('Simon', 'Julie', '14 Rue de Bordeaux, 33001 Bordeaux', '+33567891234'),
('Laurent', 'Thomas', '15 Rue de Lille, 59001 Lille', '+33345678912'),
('Michel', 'Laura', '16 Rue de Nice, 06001 Nice', '+33456789123'),
('David', 'Antoine', '17 Rue de Toulouse, 31001 Toulouse', '+33567891234'),
('Bertrand', 'Camille', '18 Rue de Nantes, 44001 Nantes', '+33234567891'),
('Roux', 'Émilie', '19 Rue de Strasbourg, 67001 Strasbourg', '+33345678912'),
('Fournier', 'Alexandre', '20 Rue de Montpellier, 34001 Montpellier', '+33456789123');

-- Insertions de données de test dans la table Produit
INSERT INTO `Produit` (`nom`, `prix_unitaire`, `quantite_stock`, `categorie_id`, `fournisseur_id`) VALUES
('F-16 Fighting Falcon', 29.99, 50, 1, 1),
('Boeing 747', 39.99, 30, 2, 2),
('Spitfire', 19.99, 20, 4, 3),
('Airbus A380', 49.99, 25, 5, 4),
('Cessna 172', 24.99, 40, 6, 5),
('Concorde', 34.99, 15, 5, 6),
('P-51 Mustang', 27.99, 35, 4, 7),
('Gulfstream G650', 59.99, 10, 6, 8),
('Antonov An-225', 69.99, 5, 9, 9),
('Crop Duster', 14.99, 60, 10, 10);

-- Insertions de données de test dans la table Commandes
INSERT INTO `Commandes` (`client_id`, `date_commande`, `statut`) VALUES
(1, '2023-10-01 10:00:00', 'En cours'),
(2, '2023-10-02 11:00:00', 'Livrée'),
(3, '2023-10-03 12:00:00', 'En cours'),
(4, '2023-10-04 13:00:00', 'Livrée'),
(5, '2023-10-05 14:00:00', 'En cours'),
(6, '2023-10-06 15:00:00', 'Livrée'),
(7, '2023-10-07 16:00:00', 'En cours'),
(8, '2023-10-08 17:00:00', 'Livrée'),
(9, '2023-10-09 18:00:00', 'En cours'),
(10, '2023-10-10 19:00:00', 'Livrée');

-- Insertions de données de test dans la table Lignes_Commande
INSERT INTO `Lignes_Commande` (`commande_id`, `produit_id`, `quantite`, `prix_unitaire_applique`) VALUES
(1, 1, 2, 29.99),
(2, 2, 1, 39.99),
(3, 3, 3, 19.99),
(4, 4, 1, 49.99),
(5, 5, 2, 24.99),
(6, 6, 1, 34.99),
(7, 7, 4, 27.99),
(8, 8, 1, 59.99),
(9, 9, 1, 69.99),
(10, 10, 5, 14.99);
