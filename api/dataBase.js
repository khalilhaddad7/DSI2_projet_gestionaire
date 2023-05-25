import mongoose from "mongoose";

export const connectDatabase = async ()=>{
try{
    const {connection} = await mongoose.connect("mongodb+srv://khalil:khalil12@cluster0.e8ddue2.mongodb.net/projet?retryWrites=true&w=majority")
    console.log(`MongDB connected : ${connection.host}`)
}catch(error){
    console.log(error)
    process.exit(1)
}
}