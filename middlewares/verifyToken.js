const jwt = require("jsonwebtoken")
const {customError} = require("./error")

const verifyToken = (req,res, next) => {
    const token = req.cookies.token
    if(!token){
        throw new customError("You are not authenticated!", 401)
    }
    jwt.verify(token, process.env.JWT_SECRET, async(err, data)=>{
        if(err){
            throw new customError("Token is not valid!", 403)
        }
        req.userId=data._id
        console.log(req)
        next()
    })
}

module.exports=verifyToken