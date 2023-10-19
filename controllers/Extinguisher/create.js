import Extinguisher from '../../models/Extinguisher.js'


export default async (req, res, next) => {
    try {
        let one = await Extinguisher.create(req.body)
        return res.status(201).json({
            success: true,
            response: one,
            message: "Extinguisher created!"
        })
    } catch (error) {
        next(error)
    }
}