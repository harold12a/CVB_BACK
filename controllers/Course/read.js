import Course from '../../models/Course.js'

export default async (req, res, next) => {
    try {
        let all = await Course.find()
        if (all.length) {
            // Modificar la respuesta para agregar _id a cada objeto de noticia
            const courseWithId = all.map((course) => ({
                _id: course._id,
                title: course.title,
                date: course.date,
                description: course.description,
                image: course.image,
                price: course.price,
                timeofCurse: course.timeofCurse,
            }));
            return res.status(200).json({
                success: true,
                response: courseWithId,
                message: "course found !"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "course not found !!"
        })
    } catch (error) {
        next(error)
    }
}