import Cliente from "../../models/Cliente.js";

export default async (req, res, next) => {
    try {
        let all = await Cliente.find()
        if (all.length > 0) {
            return res.status(200).json({
                success: true,
                response: all,
            })
        } else {
            return res.status(404).json({
                success: false,
                message: '  cliente no encontrado!'
            });
        }
    } catch (error) {
        next(error)
    }
}
