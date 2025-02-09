const express = require('express');
const mysql = require('mysql2/promise');
const fs = require('fs');

const app = express();
app.use(express.json());

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "Maquettes_avion",
    multipleStatements: true
};

const executeDBFile = async (connection, filePath) => {
    const sql = fs.readFileSync(filePath, 'utf8');
    await connection.query(sql);
    console.log(`${filePath} exécuté avec succès`);
};

const initDB = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connexion à MySQL réussie');

        await executeDBFile(connection, './src/database/creationDB.sql');

        await connection.changeUser({ database: "Maquettes_avion" });

        await executeDBFile(connection, './src/database/insertData.sql');

        console.log('Base de données initialisée avec succès');
        return connection;
    } catch (err) {
        console.error('Erreur lors de l\'initialisation de la base de données :', err);
        process.exit(1);
    }
};

// Routes CRUD pour la table Produit
app.get('/produits', async (req, res) => {
    try {
        const { nom } = req.query;
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query(`SELECT * FROM Produit WHERE nom='${nom}'`);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/produits', async (req, res) => {
    const { nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.query(
            `INSERT INTO Produit (nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id) VALUES ('${nom}', ${prix_unitaire}, ${quantite_stock}, ${categorie_id}, ${fournisseur_id})`
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/produits/:id', async (req, res) => {
    const { id } = req.params;
    const { nom, prix_unitaire, quantite_stock, categorie_id, fournisseur_id } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(
            `UPDATE Produit SET nom='${nom}', prix_unitaire=${prix_unitaire}, quantite_stock=${quantite_stock}, categorie_id=${categorie_id}, fournisseur_id=${fournisseur_id} WHERE id=${id}`
        );
        res.status(200).json({ message: 'Produit mis à jour' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/produits/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(`DELETE FROM Produit WHERE id=${id}`);
        res.status(200).json({ message: 'Produit supprimé' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Routes CRUD pour la table Categories
app.get('/categories', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM Categories');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/categories', async (req, res) => {
    const { nom } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.query(`INSERT INTO Categories (nom) VALUES ('${nom}')`);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/categories/:id', async (req, res) => {
    const { id } = req.params;
    const { nom } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(`UPDATE Categories SET nom='${nom}' WHERE id=${id}`);
        res.status(200).json({ message: 'Catégorie mise à jour' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/categories/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(`DELETE FROM Categories WHERE id=${id}`);
        res.status(200).json({ message: 'Catégorie supprimée' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Routes CRUD pour la table Fournisseurs
app.get('/fournisseurs', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM Fournisseurs');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/fournisseurs', async (req, res) => {
    const { nom, prenom, adresse, tel } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.query(
            `INSERT INTO Fournisseurs (nom, prenom, adresse, tel) VALUES ('${nom}', '${prenom}', '${adresse}', '${tel}')`
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/fournisseurs/:id', async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, adresse, tel } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(
            `UPDATE Fournisseurs SET nom='${nom}', prenom='${prenom}', adresse='${adresse}', tel='${tel}' WHERE id=${id}`
        );
        res.status(200).json({ message: 'Fournisseur mis à jour' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/fournisseurs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(`DELETE FROM Fournisseurs WHERE id=${id}`);
        res.status(200).json({ message: 'Fournisseur supprimé' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Routes CRUD pour la table Client
app.get('/clients', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM Client');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/clients', async (req, res) => {
    const { nom, prenom, adresse, tel } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.query(
            `INSERT INTO Client (nom, prenom, adresse, tel) VALUES ('${nom}', '${prenom}', '${adresse}', '${tel}')`
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/clients/:id', async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, adresse, tel } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(
            `UPDATE Client SET nom='${nom}', prenom='${prenom}', adresse='${adresse}', tel='${tel}' WHERE id=${id}`
        );
        res.status(200).json({ message: 'Client mis à jour' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/clients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(`DELETE FROM Client WHERE id=${id}`);
        res.status(200).json({ message: 'Client supprimé' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Routes CRUD pour la table Commandes
app.get('/commandes', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM Commandes');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/commandes', async (req, res) => {
    const { client_id, date_commande, statut } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.query(
            `INSERT INTO Commandes (client_id, date_commande, statut) VALUES (${client_id}, '${date_commande}', '${statut}')`
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/commandes/:id', async (req, res) => {
    const { id } = req.params;
    const { client_id, date_commande, statut } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(
            `UPDATE Commandes SET client_id=${client_id}, date_commande='${date_commande}', statut='${statut}' WHERE id=${id}`
        );
        res.status(200).json({ message: 'Commande mise à jour' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/commandes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(`DELETE FROM Commandes WHERE id=${id}`);
        res.status(200).json({ message: 'Commande supprimée' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Routes CRUD pour la table Lignes_Commande
app.get('/lignes_commande', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM Lignes_Commande');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/lignes_commande', async (req, res) => {
    const { commande_id, produit_id, quantite, prix_unitaire_applique } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.query(
            `INSERT INTO Lignes_Commande (commande_id, produit_id, quantite, prix_unitaire_applique) VALUES (${commande_id}, ${produit_id}, ${quantite}, ${prix_unitaire_applique})`
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/lignes_commande/:id', async (req, res) => {
    const { id } = req.params;
    const { commande_id, produit_id, quantite, prix_unitaire_applique } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(
            `UPDATE Lignes_Commande SET commande_id=${commande_id}, produit_id=${produit_id}, quantite=${quantite}, prix_unitaire_applique=${prix_unitaire_applique} WHERE id=${id}`
        );
        res.status(200).json({ message: 'Ligne de commande mise à jour' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/lignes_commande/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query(`DELETE FROM Lignes_Commande WHERE id=${id}`);
        res.status(200).json({ message: 'Ligne de commande supprimée' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Démarrer le serveur
initDB().then(() => {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
});