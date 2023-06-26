import joi from 'joi-oid';

const schema = joi.object({
    name: joi.string().min(3).max(15).messages({
        'string.min':' minimo 3 caracteres',
        'string.max':' maximo 20 caracteres',
    }),
    last_name: joi.string(),
    city: joi.string(),
    country: joi.string(),
    photo: joi.string().uri(),
    user_id: joi.objectId(),
    active: joi.boolean(),
})

export default schema