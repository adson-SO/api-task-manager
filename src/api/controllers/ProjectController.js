const ProjectService = require('../services/ProjectService');

class ProjectController {
    async create(req, res) {
        const payload = req.body;
        try {
            const result = await ProjectService.create(payload);
            return res.status(201).json(result);
        } catch (err) {
            return res.status(500).json({ description: err.name, name: err.message });
        }
    }

    async find(req, res) {
        try {
            const result = await ProjectService.find();
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ description: err.name, name: err.message });
        }
    }

    async findOne(req, res) {
        const { id } = req.params;
        try {
            const result = await ProjectService.findOne(id);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ description: err.name, name: err.message });
        }
    }
}

module.exports = new ProjectController();