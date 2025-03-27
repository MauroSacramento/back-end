const routes = require('express').Router();
const authController = require('./app/controllers/authController');
const projectController = require('./app/controllers/projectController');
const authMiddleware = require('./app/middlewares/auth');

routes.post("/register", authController.store)
routes.post("/authenticate", authController.authentication)

routes.use(authMiddleware)
routes.get("/projects", projectController.projetos)


module.exports = routes;