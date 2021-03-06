const ProjectService = require('../services/ProjectService');

class ProjectController {
    async create(req, res) {
        const payload = req.body;
        try {
            const project = await ProjectService.create(payload);
            const result = {
                id: project.id,
                title: project.title,
                description: project.description,
                createdAt: project.createdAt,
                updatedAt: project.updatedAt,
                tasks: project.tasks
            };
            
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

            if(result === null) {
                return res.status(404).json({ description: 'Not Found', name: 'Id not found in the database' });
            }

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ description: err.name, name: err.message });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const payload = req.body;
        try {
            const result = await ProjectService.findOne(id);

            if(result === null) {
                return res.status(404).json({ description: 'Not Found', name: 'Id not found in the database' });
            }

            await ProjectService.update(id, payload);

            return res.status(204).end();
        } catch (err) {
            return res.status(500).json({ description: err.name, name: err.message })
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const result = await ProjectService.findOne(id);

            if(result === null) {
                return res.status(404).json({ description: 'Not Found', name: 'Id not found in the database' });
            }

            await ProjectService.delete(id);

            return res.status(204).end(); 
        } catch (err) {
            return res.status(500).json({ description: err.name, name: err.message });
        }
    }
}

module.exports = new ProjectController();