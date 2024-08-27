const errorHandler =(err, req, res, next) => {
    console.error(err.stack)
    if(err instanceof customError){
        return res.status(err.status).json({error: err.message})
    }
    return res.status(500).json({error: "Internal Server Error!"})
}

class customError extends Error{
    constructor(message, status=500){
        super(message)
        this.name=this.constructor.name
        this.status=status
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = {errorHandler, customError}