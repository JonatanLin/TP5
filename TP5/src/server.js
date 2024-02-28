// server.js
const dotenv = require('dotenv');
const fs = require('fs');
const fastify = require('fastify')();
const connectDB = require('../databases/db');

dotenv.config();

// Importation du modèle de livre
const Book = require('./book');

// Connexion à la base de données MongoDB
connectDB();

// Routes
fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});


// Démarrez le serveur
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        fastify.log.info(`Serveur lancé sur ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};



start();

