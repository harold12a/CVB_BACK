import joi from "joi";

const schemaSignUp = joi.object({
    email: joi.string().required().email({ minDomainSegments: 2 }).messages({
        "any.required": "Email es requerido!!",
        "string.base": "Email es requerido!!",
        "string.empty": "Email es requerido!!",
        "string.email": "El formato de email es invalido!!",
    }),
    password: joi.string().required().min(8).alphanum().messages({
        "any.required": "Contraseña es requerida!!",
        "string.base": "Contraseña es requerida!!",
        "string.empty": "Contraseña es requerida!!",
        "string.min": "La contraseña es demasiado corta!",
        "string.alphanum": "La contraseña debe ser alfanumérica!!",
    }),
    photo: joi.string().required().min(10).messages({
        "any.required": "Foto requerida!",
        "string.base": "Foto requerida!",
        "string.empty": "Foto requerida!",
        "string.min": "Photo is too short!",
        "string.uri": "¡La foto debe ser una URL!",
    })

});

export default schemaSignUp;
