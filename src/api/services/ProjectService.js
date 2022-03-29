const ProjectRepository = require('../repositories/ProjectRepository');

class ProjectService {
    async create(payload) {
        const result = await ProjectRepository.create(payload);

        result.tasks.map(task => {
            task.id = undefined;
            task.projectId = undefined;
        });
        
        return result;
    }

    async find() {
        const result = await ProjectRepository.find();
        return result;
    }

    async findOne(id) {
        const result = await ProjectRepository.findOne(id);
        return result;
    }

    async update(id, payload) {
        const result = await ProjectRepository.update(id, payload);
        return result;
    }

    async delete(id) {
        return ProjectRepository.delete(id);
    }
}

module.exports = new ProjectService();