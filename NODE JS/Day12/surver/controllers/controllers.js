import dataModels from "../model/modelss.js";

export const controllers=async (req,res) => {
    try {
       const {username,useremail,userpassword}=req.body
       const Milk = dataModels.create({username,useremail,userpassword})
       res.status(201).json({msg:"created successfully",Milk})
        
    } catch (error) {
       console.log(error);
        
    }
    
}