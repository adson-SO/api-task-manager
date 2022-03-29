const ProjectController = require('../api/controllers/ProjectController');
const createValidation = require('../api/validations/project/create');

module.exports = (server, router, prefix = '/api/project') => {
    router.post('/', createValidation, ProjectController.create);
    router.get('/', ProjectController.find);
    router.get('/:id', ProjectController.findOne);
    router.put('/:id', ProjectController.update);
    router.delete('/:id', ProjectController.delete);
    server.use(prefix, router);
}