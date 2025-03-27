const mongoose = require('mongoose');
require('dotenv').config();

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

async function main() {

    try {
        await mongoose.connect(`mongodb+srv://maurosacramento35:Kx1O4ClzXoGFwHav@cluster0.tsfby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

        console.log("Connectado ao banco de dados");
    } catch (err) {
        console.log(`Erro: ${err}`);
    }
}

module.exports = main;