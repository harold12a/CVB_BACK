import Course from '../../models/Course.js'

export default async (req, res, next) => {
    try {
        let one = await Course.findByIdAndDelete(req.params.id)
        if (one) {
            return res.status(204).json({
                success: true,
                response: one,
                message: "Course deleted"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Course not deleted"
        })
    } catch (error) {
        next(error)
    }
}