import Post from '../../models/Post.js'

export default async (req, res, next) => {
    try {
        let one = await Post.findByIdAndDelete(req.params.id)
        if (one) {
            return res.status(204).json({
                success: true,
                response: one,
                message: "Post deleted"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Post not deleted"
        })
    } catch (error) {
        next(error)
    }
}