const routes = require('express').Router();
const authController = require('./controllers/authController');
const projectController = require('./controllers/projectController');
const authMiddleware = require('./middlewares/auth');

routes.post("/register", authController.store)
routes.post("/authenticate", authController.authentication)

routes.use(authMiddleware)
routes.get("/projects", projectController.projetos)


module.exports = routes;