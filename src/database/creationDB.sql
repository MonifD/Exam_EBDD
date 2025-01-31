DROP DATABASE IF EXISTS Maquettes_avion;

CREATE DATABASE Maquettes_avion;

USE Maquettes_avion;

CREATE TABLE `Produit` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `prix_unitaire` FLOAT NOT NULL,
  `quantite_stock` INT NOT NULL,
  `categorie_id` INT NOT NULL,
  `fournisseur_id` INT NOT NULL
);

CREATE TABLE `Categories` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL
);

CREATE TABLE `Fournisseurs` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `adresse` VARCHAR(100) NOT NULL,
  `tel` VARCHAR(100) NOT NULL
);

CREATE TABLE `Client` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `adresse` VARCHAR(100) NOT NULL,
  `tel` VARCHAR(100) NOT NULL
);

CREATE TABLE `Commandes` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `client_id` INT NOT NULL,
  `date_commande` DATETIME NOT NULL,
  `statut` ENUM("En cours", "Livrée") NOT NULL
);

CREATE TABLE `Lignes_Commande` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `commande_id` INT NOT NULL,
  `produit_id` INT NOT NULL,
  `quantite` INT NOT NULL,
  `prix_unitaire_applique` FLOAT NOT NULL
);

ALTER TABLE `Produit` ADD FOREIGN KEY (`categorie_id`) REFERENCES `Categories` (`id`);

ALTER TABLE `Produit` ADD FOREIGN KEY (`fournisseur_id`) REFERENCES `Fournisseurs` (`id`);

ALTER TABLE `Commandes` ADD FOREIGN KEY (`client_id`) REFERENCES `Client` (`id`);

ALTER TABLE `Lignes_Commande` ADD FOREIGN KEY (`commande_id`) REFERENCES `Commandes` (`id`);

ALTER TABLE `Lignes_Commande` ADD FOREIGN KEY (`produit_id`) REFERENCES `Produit` (`id`);
