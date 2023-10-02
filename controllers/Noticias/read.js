import Noticias from "../../models/Noticias.js"

export default async (req, res, next) => {
    try {
        let all = await Noticias.find()
        if (all.length) {
            return res.status(200).json({
                success: true,
                response: all,
                message: "noticias found !"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Noticias not found !!"
        })
    } catch (error) {
        next(error)
    }
}