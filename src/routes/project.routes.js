const ProjectController = require('../api/controllers/ProjectController');

module.exports = (server, router, prefix = '/api/project') => {
    router.post('/', ProjectController.create);
    server.use(prefix, router)
}