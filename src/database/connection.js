const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.tsfby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("Connectado ao banco de dados");
} catch (err) {
    console.log(`Erro: ${err}`);
}