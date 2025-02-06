const mysql = require("mysql2/promise");
require("dotenv").config();

const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    multipleStatements: true,
};

// Fonction pour initialiser la base de données
async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE};`);
        console.log("Base de données initialisée avec succès !");
        await connection.end();
    } catch (error) {
        console.error("Erreur lors de l'initialisation de la base :", error);
    }
}

module.exports = { initializeDatabase };
