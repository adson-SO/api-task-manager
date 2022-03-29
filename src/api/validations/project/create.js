const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            title: Joi.string().min(10).trim().required(),
            description: Joi.string().min(15).trim().required(),
            tasks: Joi.array().items(Joi.object({
                title: Joi.string().min(10).trim().required(),
                taskRelevance: Joi.number().integer().positive().required(),
                completed: Joi.boolean().required()
            }))
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if(error) throw error;
        return next();
    } catch (err) {
        return res.status(400).json({
            description: err.details[0].context.label,
            name: err.message
        });
    }
}