import Extinguisher from '../../models/Extinguisher.js'

export default async (req, res, next) => {
    try {
        let one = await Extinguisher.findByIdAndUpdate(req.params.id, req.body)
        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Extinguisher updated"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Extinguisher not updated"
        })
    } catch (error) {
        next(error)
    }
}