import Post from '../../models/Post.js'


export default async (req, res, next) => {
    try {
        let one = await Post.create(req.body)
        return res.status(201).json({
            success: true,
            response: one,
            message: "Post created!"
        })
    } catch (error) {
        next(error)
    }
}