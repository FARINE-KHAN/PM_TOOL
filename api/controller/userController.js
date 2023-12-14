import user from "../models/user.js";
import ShortUniqueId from "short-unique-id";
import bcrypt from "bcrypt";
export const register = async (req,res)=>{
    try {
        const data = req.body;
        const {firstName,lastName,role,email,employeeId,password,profileImage,isAdmin,team}=data;
       const duplicateEmail = await user.findOne({email});
       if(duplicateEmail){
        return res.status(400).json({message:"User already exists with this email!"});
       }
    //    if(role==="Employee"){
    //    console.log("data")
        const uid = new ShortUniqueId({ length: 4, dictionary:'number' });
          let code="EMP"+uid.rnd();
          data.employeeId=code;
    //    } 
       const salt = await bcrypt.genSalt(10);
       data.password = await bcrypt.hash(password, salt);
       console.log(data)

        const saveData = await user.create(data);
        res.status(201).json({message:"user created",data:saveData});   
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }
}
export const login = async (req,res)=>{
    try {
        let data =req.body
        let { employeeId, password } = data;
        let getUser = await user.findOne({ employeeId });
        if (!getUser)
            return res.status(400).send("Invalid employeeId");
        let matchPassword = await bcrypt.compare(password, getUser.password);
        if (!matchPassword) {
          let matchP = await user.findOne({ password });
          if (!matchP) {
            return res.status(401).json("employeeId or Password is incorrect.");
          }
        }
        return res.status(200).json({message:"loggedIn User",data:getUser});
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const update = async (req,res)=>{
    try {
        
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export const deleteEmployee = async (req,res)=>{
    try {
        
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}