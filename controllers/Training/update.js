import Training from '../../models/Training.js'

export default async (req, res, next) => {
    try {
        let one = await Training.findByIdAndUpdate(req.params.id, req.body)
        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Training updated"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Training not updated"
        })
    } catch (error) {
        next(error)
    }
}