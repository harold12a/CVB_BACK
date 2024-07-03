import Noticias from "../../models/Noticias.js";

export default async (req, res, next) => {
    try {
        let one = await Noticias.findByIdAndDelete(req.params.id)
        if (one) {
            return res.status(200).json({
                response: one,
                success: true,
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