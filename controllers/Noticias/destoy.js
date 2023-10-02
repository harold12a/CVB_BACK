import Noticias from "../../models/Noticias.js";

export default async (req, res, next) => {
    try {
        let one = await Noticias.findByIdAndDelete(req.params.id)
        if (one) {
            return res.status(204).json({
                success: true,
                response: one,
                message: "Noticia deleted"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Noticia not deleted"
        })
    } catch (error) {
        next(error)
    }
}