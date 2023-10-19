import Extinguisher from '../../models/Extinguisher.js'

export default async (req, res, next) => {
    try {
        let one = await Extinguisher.findByIdAndDelete(req.params.id)
        if (one) {
            return res.status(204).json({
                success: true,
                response: one,
                message: "Extinguisher deleted"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Extinguisher not deleted"
        })
    } catch (error) {
        next(error)
    }
}