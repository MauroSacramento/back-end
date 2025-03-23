const routes = require('express').Router();
const authController = require('./controllers/authController');

routes.post("/register", authController.store)
routes.post("/authenticate", authController.authentication)

module.exports = routes;