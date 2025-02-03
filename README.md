# Système de Gestion de Stock pour un Petit Commerce (V1)

Ce projet est une application Node.js qui permet de gérer le stock, les commandes, les clients et les fournisseurs pour un petit commerce spécialisé dans la vente de maquettes d'avion en papier. Il s'agit d'une version initiale (V1) qui sert de prototype (POC) pour démontrer les fonctionnalités de base.

---

## Fonctionnalités

### Gestion des Produits
- **Créer, lire, mettre à jour et supprimer** des produits.
- Chaque produit est associé à une catégorie et un fournisseur.
- Gestion des quantités en stock.

### Gestion des Catégories
- **Créer, lire, mettre à jour et supprimer** des catégories de produits.

### Gestion des Fournisseurs
- **Créer, lire, mettre à jour et supprimer** des fournisseurs.
- Chaque fournisseur est lié à un ou plusieurs produits.

### Gestion des Clients
- **Créer, lire, mettre à jour et supprimer** des clients.
- Les clients peuvent passer des commandes.

### Gestion des Commandes
- **Créer, lire, mettre à jour et supprimer** des commandes.
- Chaque commande est associée à un client et contient des lignes de commande (produits commandés).

### Gestion des Lignes de Commande
- **Créer, lire, mettre à jour et supprimer** des lignes de commande.
- Chaque ligne de commande est liée à une commande et un produit.

---

## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Express** : Framework pour créer des API RESTful.
- **MySQL** : Base de données relationnelle pour stocker les données.
- **mysql2/promise** : Bibliothèque pour interagir avec MySQL en utilisant des promesses.
- **nodemon** : Outil pour redémarrer automatiquement le serveur lors des modifications.

---

## Structure du Projet

- **`app.js`** : Point d'entrée de l'application. Contient la configuration du serveur et les routes.
- **`src/database/creationDB.sql`** : Script SQL pour créer la base de données et les tables.
- **`src/database/insertData.sql`** : Script SQL pour insérer des données de test.
- **`README.md`** : Documentation du projet.

---

## Comment Lancer le Projet

### Prérequis

- **Node.js** : Installé sur votre machine.
- **MySQL** : Une instance MySQL doit être disponible localement ou sur un serveur distant.

### Étapes pour Démarrer le Projet

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-projet.git
   cd votre-projet