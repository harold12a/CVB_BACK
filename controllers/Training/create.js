import Training from '../../models/Training.js'


export default async (req, res, next) => {
    try {
        let one = await Training.create(req.body)
        return res.status(201).json({
            success: true,
            response: one,
            message: "Training created!"
        })
    } catch (error) {
        next(error)
    }
}