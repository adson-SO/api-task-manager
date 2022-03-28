const ProjectRepository = require('../repositories/ProjectRepository');

class ProjectService {
    async create(payload) {
        const result = await ProjectRepository.create(payload);
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
}

module.exports = new ProjectService();