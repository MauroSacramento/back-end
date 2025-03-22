const mongoose = require('mongoose');

async function main() {

    try {
        await mongoose.connect("mongodb+srv://maurosacramento35:Kx1O4ClzXoGFwHav@cluster0.tsfby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Connectado ao banco de dados");
    } catch (err) {
        console.log(`Erro: ${err}`);
    }
}

module.exports = main;