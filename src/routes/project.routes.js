const ProjectController = require('../api/controllers/ProjectController');

module.exports = (server, router, prefix = '/api/project') => {
    router.post('/', ProjectController.create);
    router.get('/', ProjectController.find);
    router.get('/:id', ProjectController.findOne);
    server.use(prefix, router);
}