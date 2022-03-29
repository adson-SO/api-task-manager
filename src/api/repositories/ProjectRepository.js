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

    async find() {
        const result = await models.Project.findAll({
            include: {
                model: models.Task,
                attributes: { exclude: ['id', 'projectId'] },
                as: 'tasks'
            }
        });
        
        return result;
    }

    async findOne(id) {
        const result = await models.Project.findByPk(id, {
            include: {
                model: models.Task,
                attributes: { exclude: ['id', 'projectId'] },
                as: 'tasks'
            }
        });

        return result;
    }

    async update(id, payload) {
        const result = await models.Project.update(payload, {
            where: { id: id }
        });

        return result;
    }

    async delete(id) {
        return models.Project.destroy({
            where: { id: id }
        });
    }
}

module.exports = new ProjectRepository();