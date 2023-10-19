import Course from '../../models/Course.js'


export default async (req, res, next) => {
    try {
        let one = await Course.create(req.body)
        return res.status(201).json({
            success: true,
            response: one,
            message: "Course created!"
        })
    } catch (error) {
        next(error)
    }
}