import Extinguisher from '../../models/Extinguisher.js'

export default async (req, res, next) => {
    try {
        let all = await Extinguisher.find()
        if (all.length) {
            // Modificar la respuesta para agregar _id a cada objeto de noticia
            const extinguisherWithId = all.map((extinguisher) => ({
                _id: extinguisher._id,
                extinguisher: extinguisher.extinguisher,
                image: extinguisher.image,
                price: extinguisher.price,

            }));
            return res.status(200).json({
                success: true,
                response: extinguisherWithId,
                message: "extinguisher found !"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "extinguisher not found !!"
        })
    } catch (error) {
        next(error)
    }
}