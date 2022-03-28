const models = require('../models');

class ProjectRepository {
    async create(payload) {
        const result = await models.Project.create(payload, {
            include: [{ 
                model: models.Task,
                as: 'tasks'
            }]
        });
        return result;
    }
}

module.exports = new ProjectRepository();