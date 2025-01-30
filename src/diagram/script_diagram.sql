Table Produit {
  id INT [pk, not null, increment]
  nom VARCHAR(45) [not null]
  prix_unitaire FLOAT [not null]
  quantite_stock INT [not null]
  categorie_id INT [not null]
  fournisseur_id INT [not null]
}

Table Categories {
  id INT [pk, not null, increment]
  nom VARCHAR(45) [not null]
}

Table Fournisseurs {
  id INT [pk, not null, increment]
  nom VARCHAR(45) [not null]
  prenom VARCHAR(45) [not null]
  adresse VARCHAR(100) [not null]
  tel INT [not null]
}

Table Client {
  id INT [pk, not null, increment]
  nom VARCHAR(45) [not null]
  prenom VARCHAR(45) [not null]
  adresse VARCHAR(100) [not null]
  tel INT [not null]
}

Table Commandes {
  id INT [pk, not null, increment]
  client_id INT [not null]
  date_commande DATETIME [not null]
  statut ENUM("En cours", "Livrée") [not null]
}

Table Lignes_Commande {
  id INT [pk, not null, increment]
  commande_id INT [not null]
  produit_id INT [not null]
  quantite INT [not null]
  prix_unitaire_applique FLOAT [not null]
}

// Relations entre les tables
Ref: Produit.categorie_id > Categories.id
Ref: Produit.fournisseur_id > Fournisseurs.id
Ref: Commandes.client_id > Client.id
Ref: Lignes_Commande.commande_id > Commandes.id
Ref: Lignes_Commande.produit_id > Produit.id