import { Emploi } from "../models/Emploi.js";
import cloudinary from "cloudinary";
import fs from "fs";

export const addEmploi= async (req , res)=>{

   try{
        const {desc} = req.body;
        const photoEmploi = req.files.photoEmploi.tempFilePath;
        const mycloud =  await cloudinary.v2.uploader.upload(photoEmploi , {
            folder : "emploie"
        });  
        
        fs.rmSync("./tmp" , {recursive : true}); 
  
        const newemploi = new Emploi({
        desc,
        photoEmploi :{
            url: mycloud.secure_url,
          },
    })

    const saveEmploi = await newemploi.save();
    res.status(200).json(saveEmploi);
   
}catch(error){
        res.status(500).json({message : error.message})
    } 
 
}

export const fetchEmploi  =  async(req , res)=>{

    try{
    const data = await Emploi.find();
    res.status(200).json(data);
    }catch(error){
        res.status(500).json({message : error.message})
    }


}