// db.js
const mongoose = require('mongoose');
const Book = require('../src/book'); // Importer le modèle de livre

// Fonction de connexion à la base de données
const connectDB = async () => {
    try {
        console.log('Tentative de connexion à MongoDB');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connecté à MongoDB');

        // Créer un nouveau livre
        const nouveauLivre = new Book({
            title: 'Le Seigneur des Anneaux',
            author: 'J.R.R. Tolkien',
            description: 'Un livre épique de fantasy',
            format: 'poche'
        });

        // Enregistrer le nouveau livre dans la base de données
        await nouveauLivre.save();
        console.log('Livre créé avec succès');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error.message);
        process.exit(1);
    }
};


module.exports = connectDB;
