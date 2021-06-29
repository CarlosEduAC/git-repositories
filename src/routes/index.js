const { Router } = require('express');

const repositoryRouter =  require('./repository.routes');

const routes = Router();

routes.use('/repositories', repositoryRouter);

module.exports = routes;