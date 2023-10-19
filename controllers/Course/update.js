import Course from '../../models/Course.js'

export default async (req, res, next) => {
    try {
        let one = await Course.findByIdAndUpdate(req.params.id, req.body)
        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Course updated"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Course not updated"
        })
    } catch (error) {
        next(error)
    }
}