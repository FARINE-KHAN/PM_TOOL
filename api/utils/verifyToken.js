import jwt from "jsonwebtoken"
export const verifyToken =  (req,res,next)=>{
 const token = req.cookies.access_token;
 if(!token){
    return res.status(401).send({auth:false , message:"No Token Provided"})
 }
 jwt.verify(token,process.env.SECERET_KEY, (err,user)=>{
    if(err){
        return res.status(403).send({ auth : false ,message : 'Failed to authenticate'});
    }
    else{
        req.user= user ;
        next();
    }
 })

}

export const verifyUser = (req,res,next)=>{
    try {
       if (req.user.id===req.params.id || req.user.isAdmin){
        next()
       }else{
        return res.status(403).json("You Are not Authorized")
       }
    
    } catch (error) {
        
    }
}
export const verifyAdmin = (req,res,next)=>{
    try {
       if ( req.user.isAdmin){
        next()
       }else{
        return res.status(403).json("You Are not Admin")
       }
    
    } catch (error) {
        
    }
}