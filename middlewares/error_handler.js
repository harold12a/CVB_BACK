const error_hanlder =(error,req,res,next) => {
    console.log(error);
    return res.status(500).json({
        success: false,
        response: null,
        message: 'not found!'
    })
}

export default error_hanlder