import Noticias from "../../models/Noticias.js";

export default async (req, res, next) => {
    try {
        let one = await Noticias.findByIdAndUpdate(req.params.id, req.body)
        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Noticia updated"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Noticia not updated"
        })
    } catch (error) {
        next(error)
    }
}