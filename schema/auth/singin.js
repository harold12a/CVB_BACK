import joi from "joi";

const schemaSignIn = joi.object({
    email: joi.string().required().email({ minDomainSegments: 2 }).messages({
        "any.required": "Email es requerido!",
        "string.base": "Email es requerido",
        "string.empty": "Email es requerido",
        "string.email": "El formato de email es invalido!",
    }),
    password: joi.string().required().min(8).alphanum().messages({
        "any.required": "Contraseña es requerida!",
        "string.base": "Contraseña es requerida!",
        "string.empty": "Contraseña es requerida!",
        "string.min": "Contraseña es requerida!",
        "string.alphanum": "¡La contraseña debe ser alfanumérica!",
    }),
});

export default schemaSignIn;
