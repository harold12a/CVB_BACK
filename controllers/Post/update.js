import Post from '../../models/Post.js'

export default async (req, res, next) => {
    try {
        let one = await Post.findByIdAndUpdate(req.params.id, req.body)
        if (one) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Post updated"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Post not updated"
        })
    } catch (error) {
        next(error)
    }
}