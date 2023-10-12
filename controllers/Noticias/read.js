import Noticias from "../../models/Noticias.js"

export default async (req, res, next) => {
    try {
        let all = await Noticias.find()
        if (all.length) {
            // Modificar la respuesta para agregar _id a cada objeto de noticia
            const noticiasConId = all.map((noticia) => ({
                _id: noticia._id,
                title: noticia.title,
                date: noticia.date,
                description: noticia.description,
                image: noticia.image,
            }));
            return res.status(200).json({
                success: true,
                response: noticiasConId,
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