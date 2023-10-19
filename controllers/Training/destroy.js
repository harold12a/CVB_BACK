import Training from '../../models/Training.js'

export default async (req, res, next) => {
    try {
        let one = await Training.findByIdAndDelete(req.params.id)
        if (one) {
            return res.status(204).json({
                success: true,
                response: one,
                message: "Training deleted"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Training not deleted"
        })
    } catch (error) {
        next(error)
    }
}