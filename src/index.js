const express = require('express')
const app = express()


app.use(express.json())

//DB connection
const conn = require('./database/connection');
conn();

// Routes
const routes = require('./routes');
app.use("/api", routes);

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});