const ProjectController = require('../api/controllers/ProjectController');
const createValidation = require('../api/validations/project/create');
const updateValidation = require('../api/validations/project/update');
const idValidation = require('../api/validations/idValidation');

module.exports = (server, router, prefix = '/api/project') => {
    router.post('/', createValidation, ProjectController.create);
    router.get('/', ProjectController.find);
    router.get('/:id', idValidation, ProjectController.findOne);
    router.put('/:id', idValidation, updateValidation, ProjectController.update);
    router.delete('/:id', idValidation, ProjectController.delete);
    server.use(prefix, router);
}