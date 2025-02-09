
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
- **`src/diagram/diagram.png`** : Photo de la BDD modéliser sous forme de table.
- **`src/diagram/script_diagral.sql`** : Script qui a generer les tables grance au site dbdiagram.io.
- **`README.md`** : Documentation du projet.

---

## Comment Lancer le Projet

### Prérequis

- **Node.js** : Installé sur votre machine.
- **MySQL** : Une instance MySQL doit être disponible localement ou sur un serveur distant.

### Étapes pour Démarrer le Projet

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/MonifD/Exam_EBDD.git
   cd votre-projet
   ```

2. **Installer les dépendances** : 
   ```bash
   npm install
   ```

3. **Configurer la base de données** :
   Assurez-vous que MySQL est installé et en cours d'exécution.

   Modifiez les informations de connexion dans `app.js` si nécessaire :
   ```javascript
   const dbConfig = {
     host: "localhost",
     user: "root",
     password: "root",
     database: "Maquettes_avion",
     multipleStatements: true
   };
   ```

4. **Initialiser la base de données** :
   Exécutez le script SQL pour créer la base de données et insérer les données de test :
   ```bash
   node app.js
   ```

5. **Démarrer le serveur** :
   Une fois la base de données initialisée, le serveur démarrera automatiquement sur le port 3000.

   Vous pouvez accéder à l'API à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

### Routes de l'API

#### Produits
- `GET /produits` : Récupérer tous les produits.
- `POST /produits` : Créer un nouveau produit.
- `PUT /produits/:id` : Mettre à jour un produit existant.
- `DELETE /produits/:id` : Supprimer un produit.

#### Catégories
- `GET /categories` : Récupérer toutes les catégories.
- `POST /categories` : Créer une nouvelle catégorie.
- `PUT /categories/:id` : Mettre à jour une catégorie existante.
- `DELETE /categories/:id` : Supprimer une catégorie.

#### Fournisseurs
- `GET /fournisseurs` : Récupérer tous les fournisseurs.
- `POST /fournisseurs` : Créer un nouveau fournisseur.
- `PUT /fournisseurs/:id` : Mettre à jour un fournisseur existant.
- `DELETE /fournisseurs/:id` : Supprimer un fournisseur.

#### Clients
- `GET /clients` : Récupérer tous les clients.
- `POST /clients` : Créer un nouveau client.
- `PUT /clients/:id` : Mettre à jour un client existant.
- `DELETE /clients/:id` : Supprimer un client.

#### Commandes
- `GET /commandes` : Récupérer toutes les commandes.
- `POST /commandes` : Créer une nouvelle commande.
- `PUT /commandes/:id` : Mettre à jour une commande existante.
- `DELETE /commandes/:id` : Supprimer une commande.

#### Lignes de Commande
- `GET /lignes_commande` : Récupérer toutes les lignes de commande.
- `POST /lignes_commande` : Créer une nouvelle ligne de commande.
- `PUT /lignes_commande/:id` : Mettre à jour une ligne de commande existante.
- `DELETE /lignes_commande/:id` : Supprimer une ligne de commande.

---

## Explication du Code

### `app.js`
Ce fichier est le point d'entrée de l'application. Il configure le serveur Express et définit les routes pour les opérations CRUD sur les différentes tables de la base de données.

- **Connexion à MySQL** : La connexion à la base de données MySQL est configurée dans `dbConfig`.
- **Initialisation de la base de données** : La fonction `initDB` exécute les scripts SQL pour créer la base de données et insérer les données de test.
- **Routes CRUD** : Chaque route correspond à une opération CRUD sur une table spécifique.

### `src/database/creationDB.sql`
Ce script SQL crée la base de données `Maquettes_avion` et les tables nécessaires (`Produit`, `Categories`, `Fournisseurs`, `Client`, `Commandes`, `Lignes_Commande`).

### `src/database/insertData.sql`
Ce script SQL insère des données de test dans les tables pour permettre des tests immédiats.
