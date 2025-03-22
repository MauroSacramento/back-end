const routes = require('express').Router();
const authController = require('./controllers/authController');

routes.post("/register", authController.store)

module.exports = routes;