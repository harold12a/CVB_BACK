import Noticias from "../../models/Noticias.js";

export default async (req, res, next) => {
    try {
        let one = await Noticias.create(req.body)
        return res.status(201).json({
            success: true,
            response: one,
            message: "Noticia created!"
        })
    } catch (error) {
        next(error)
    }
}