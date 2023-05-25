import mongoose from "mongoose";
const EmploiSch = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    photoEmploi : {
      url : String 
  },   
  },

 
  { timestamps: true }
);

export const Emploi = mongoose.model("Emploi" , EmploiSch);