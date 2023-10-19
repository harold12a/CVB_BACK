import Post from '../../models/Post.js'

export default async (req, res, next) => {
    try {
        let all = await Post.find()
        if (all.length) {
            // Modificar la respuesta para agregar _id a cada objeto de noticia
            const postWithId = all.map((post) => ({
                _id: course._id,
                title: post.title,
                date: post.date,
                description: post.description,
                image: post.image,
            }));
            return res.status(200).json({
                success: true,
                response: postWithId,
                message: "post found !"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "post not found !!"
        })
    } catch (error) {
        next(error)
    }
}