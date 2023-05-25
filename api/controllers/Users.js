import { User } from "../models/Users.js";
import CryptoJS from "crypto-js"
import { sendToken } from "../middleware/sendToken.js";
import { response } from "express";


//register User
export const register = async (req , res) =>{
  try {
    const {name,email,password} = req.body;
    const user = await User.findOne({email}) ;
    if(user) res.status(400).json({message : "Email Deja existe"});
    const newUser = new User({
        name,
        email,   
        password :  CryptoJS.AES.encrypt(
          password,
          "aazzee"
        ).toString(),
      });    
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (error) {
        res.status(500).json({message:error.message});
      }
}


//login User with token 

export const login = async (req , res) =>{
  try{
  const {email} = req.body; 

  let user = await User.findOne({email});
  if(!user) res.status(400).json({message : ' erreur'});
  
  const hashedPassword = CryptoJS.AES.decrypt(
    user.password,
    "aazzee"
  );
  const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

  OriginalPassword !== req.body.password &&
    res.status(401).json("Wrong credentials!");


    sendToken(res, user, 200, "Login Successful");
  
  
  }catch(error){
    
    res.status(500).json({message : error.message});
  }
}

//get all users

export const getUsers = async (req , res)=>{
  try{
   
    const users = await User.find();
    res.status(200).json(users)
  }catch(error){
    res.status(500).json({message : error.message});
  }
}
// delete
export const DeleteUser = async(req , res)=>{
  try{
  const id = req.params.id;
 
  await User.findByIdAndDelete(id);
  res.status(200).json({message:"user deleted successfully"});

  }catch(error){
    res.status(500).json({message : error.message});
  }
}