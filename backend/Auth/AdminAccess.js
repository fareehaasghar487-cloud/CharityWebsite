export const  AdminAccess = async(req , res , next) =>{
    try {
        const user = req.user;
        
        if(!user){
            return res.status(401).json({message:"Unauthorized"});
        }
        if(user.role !== "Admin"){
            return res.status(403).json({message:"Access denied, Only Admin can access dashboard"});
        }
        next();
    } catch (error) {
        return res.status(500).json({message:"Server Error"});
        
    }
}