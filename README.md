# Système de Gestion de Stock pour un Petit Commerce

Ce projet est une application Node.js permettant de gérer le stock, les commandes, les clients et les fournisseurs pour un petit commerce spécialisé dans la vente de maquettes d'avion en papier. Il s'agit d'une version initiale qui servant de prototype (POC)

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

## Comment Lancer le Projet

### Prérequis

- **Node.js** : Installé sur votre machine.
- **MySQL** : Une instance MySQL doit être disponible localement ou sur un serveur distant.

### Étapes pour Démarrer le Projet

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/MonifD/Exam_EBDD
   cd Exam_EBDD
   ```

2. **Installer les dépendances** : 
   ```bash
   npm install
   ```

3. **Configurer la base de données** :
   Assurez-vous que MySQL est installé et en cours d'exécution.

   Créez un fichier `.env` et insérez les informations contenues dans `.env.example` :
   ```ini
   HOST="localhost"
   USER="root"  # Remplacez par votre nom d'utilisateur MySQL
   PASSWORD="root"  # Remplacez par votre mot de passe MySQL
   DATABASE="Maquettes_avion"  # Modifiez si nécessaire
   PORT=3306
   ```

4. **Initialiser la base de données** :
   Exécutez le fichier `app.js` pour créer la base de données et insérer les données de test :
   ```bash
   node app.js
   ```

5. **Démarrer le serveur** :
   Une fois la base de données initialisée, le serveur démarrera automatiquement sur le port 3000.

   Vous pouvez accéder à l'API à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

---

## Structure du Dépôt Git

Le dépôt Git est organisé en plusieurs branches, chacune représentant différentes versions du projet.

### Branches

- **`main`** : Contient la version finale du projet, **V2**, avec toutes les améliorations, la sécurisation et les optimisations par rapport à la version initiale.
- **`V1`** : Contient la version initiale du projet, avec les erreurs identifiées et corrigées dans la branche **V2**. Cette version représente la première implémentation du système de gestion de stock, sans les améliorations ni les optimisations apportées dans la **V2**.
- **`dev`** : Branche de développement utilisée pour les futures fonctionnalités ou modifications avant de les intégrer à la version stable.

### Naviguer entre les branches

Tu peux naviguer entre les branches **V1** et **V2** pour voir les différences entre la version initiale du projet (V1) et la version améliorée (V2).

- **V1** : Version avec erreurs et premières implémentations.
- **V2** : Version stable avec corrections, optimisations, et sécurisation du code.

Pour naviguer sur ces branches, utilise les commandes suivantes dans ton terminal :

- Pour passer à la branche **V1** :
   ```bash
   git checkout V1
   ```
- Pour passer à la branche **V2** :
   ```bash
   git checkout V2
   ```
---
## Structure du Projet

- **`app.js`** : Point d'entrée de l'application. Contient la **configuration** du serveur et les routes.
- **`src/config/config.js`** : Configuration **SEQUELIZE**, utile pour la base de donnée.
- **`src/routes`** : Contient les **endpoints** de l'api.
- **`src/controllers`** : Contient les **functions** qui permet le bon fonctionnement de l'api.
- **`src/models`** : Contient les **models** qui permet la création des tables et l'intialisation de la base de donnée.
- **`src/database/creationDB.sql`** : Script SQL pour créer la base de données et les tables.
- **`src/database/insertData.sql`** : Script SQL pour insérer des données de test.
- **`src/diagram/diagram.png`** : Schéma de la base de données sous forme d'image.
- **`src/diagram/script_diagral.sql`** : Script SQL généré via le site dbdiagram.io.
- **`README.md`** : Documentation du projet.

---

### Routes de l'API

#### Produits
- `GET /produits` : Récupère tous les produits. 
- `GET /produits/:id/commandes` : Récupère les commandes contenant un 
produit. 
- `GET /produits/most-sold` : Récupère les produits les plus vendus. 
- `GET /produits/stock-faible` : Récupère les produits en stock faible. 
- `POST /produits` : Crée un nouveau produit. 
- `PUT /produits/:id` : Met à jour un produit. 
- `DELETE /produits/:id` : Supprime un produit.

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
- `GET /clients` : Récupère tous les clients. 
- `GET /clients/:id/commandes` : Récupère les commandes d'un client. 
- `POST /clients` : Crée un nouveau client. 
- `PUT /clients/:id` : Met à jour un client. 
- `DELETE /clients/:id` : Supprime un client.

#### Commandes
- `GET /commandes `: Récupère toutes les commandes. 
- `GET /commandes/date` : Récupère les commandes par période. 
- `GET /commandes/search` : Recherche multi-critères des commandes. 
- `POST /commandes` : Crée une nouvelle commande. 
- `PUT /commandes/:id` : Met à jour une commande. 
- `DELETE /commandes/:id` : Supprime une commande. 

#### Lignes de Commande
- `GET /lignes_commande` : Récupère toutes les lignes de commande. 
- `POST /lignes_commande` : Crée une nouvelle ligne de commande. 
- `PUT /lignes_commande/:id` : Met à jour une ligne de commande. 
- `DELETE /lignes_commande/:id` : Supprime une ligne de commande.

---

## Explication du Code

### `app.js`
Ce fichier est le point d'entrée de l'application. Il configure le serveur Express et définit les routes pour les opérations CRUD sur les différentes tables de la base de données.

- **Connexion à MySQL** : La connexion à la base de données MySQL et la création de la base de données sont configurées dans la fonction `initializeDatabase`, contenue dans le fichier `creationDB.js`.
- **Insertion des données dans la base de données** : Le fichier `insertData.js` contient une fonction qui insère des données de test.
- **Routes CRUD** : Chaque route correspond à un fichier distinct contenant un CRUD complet sur une table.

---
## Historique des Versions

## 🔹 V1 - Première Version

### 🚀 Initialisation du Projet
- **🆕 30/01/2025** - Création du schéma SQL et des fichiers initiaux [`f98f82a`](https://github.com/MonifD/Exam_EBDD/commit/f98f82a25d5c7b6b1faac7690f527c33739fbfdd)
- **📝 30/01/2025** - Ajout du script de création de la base de données [`f98f82a`](https://github.com/MonifD/Exam_EBDD/commit/f98f82a25d5c7b6b1faac7690f527c33739fbfdd)
- **📊 30/01/2025** - Ajout du script de diagramme et de l’image du schéma [`b242135`](https://github.com/MonifD/Exam_EBDD/commit/b24213506d6f2a9a6cbdbb24e7cb8c06f9e3c002)

### 🔧 Développement des Fonctionnalités
- **📦 31/01/2025** - Ajout des scripts SQL pour insérer des données [`f30b07a`](https://github.com/MonifD/Exam_EBDD/commit/f30b07a8fade51170f96d30dacd51e7473c2d1f8)
- **⚙️ 03/02/2025** - Ajout des requêtes CRUD dans `app.js` [`9b36fa6`](https://github.com/MonifD/Exam_EBDD/commit/9b36fa6fc9c9a4564220434c28df1dff9ba10958)
- **🔧 03/02/2025** - Modification de `app.js` pour retirer l’accès direct à la BDD [`6c29f07`](https://github.com/MonifD/Exam_EBDD/commit/6c29f0740d9834def67e0888ed588753388aebb6)

### 📖 Documentation
- **📜 03/02/2025** - Ajout du fichier `README.md` [`a7d0127`](https://github.com/MonifD/Exam_EBDD/commit/a7d01279a0c8da1b26e147f082986967690dabde)

---

## 🔹 V2 - Optimisation et Améliorations

### 🛡 Sécurisation et Refactorisation
- **🛠 06/02/2025** - Sécurisation et amélioration de `V1` [`735880c`](https://github.com/MonifD/Exam_EBDD/commit/735880c98480c391efe2366ca78836e41fcda681)
- **🔀 06/02/2025** - Ajout des fichiers `routes` et `controllers` [`38ee604`](https://github.com/MonifD/Exam_EBDD/commit/38ee60449af61688a576d90e544d6f18266f8311)
- **⚡️ 06/02/2025** - Ajout et modification des fonctions des contrôleurs et routeurs [`b4a287c`](https://github.com/MonifD/Exam_EBDD/commit/b4a287c988499990ba40f5b7faf367669b533a63)

### 📖 Finalisation et Documentation
- **📂 08/02/2025** - Ajout du fichier `Synthese_DOURI_Mohamad.pdf` (résumé du projet) [`022b36c`](https://github.com/MonifD/Exam_EBDD/commit/022b36c9e661aa871ed09ad9abd95a08b3118f23)


