import Cliente from "../../models/Cliente.js"
export default async (req, res, next) => {
    try {
        let data = req.body
        let one = await Cliente.create(data)

        return res.status(201).json({
            success: true,
            response: one,
            message: 'created'
        })

    } catch (error) {
        next(error)
    }
}
