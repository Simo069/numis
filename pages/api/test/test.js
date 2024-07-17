import db from "@/lib/db";


export default async function handler(req,res){
    let message;
    if (req.method==="POST"){
        const {email} = req.body
        const user = await db.User.findUnique({
            where: {
                email:email
            },
        });  
        console.log("user111:",user)
        res.status(200).json({users:user})
    }else if(req.method==="GET"){
        res.status(200).json({"test":"test"})
    }
    
}