import Training from '../../models/Training.js'

export default async (req, res, next) => {
    try {
        let all = await Training.find()
        if (all.length) {
            // Modificar la respuesta para agregar _id a cada objeto de noticia
            const trainingWithId = all.map((training) => ({
                _id: training._id,
                title: training.title,
                date: training.date,
                description: training.description,
                image: training.image,
                price: training.price,
                timeofTraining: training.timeofTraining,
            }));
            return res.status(200).json({
                success: true,
                response: trainingWithId,
                message: "training found !"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "training not found !!"
        })
    } catch (error) {
        next(error)
    }
}