import { app } from "./app.js";
import { connectDatabase } from "./dataBase.js"
import cloudinary from "cloudinary";
connectDatabase();

cloudinary.config({
    cloud_name: "ddsdchyl9",
    api_key: "442825444517961",
    api_secret: "wbnk0KGVIOHZtgjxYJ2jLRPKY7U"
  });

app.listen(8800 , ()=>{
    console.log("Server is Running " + 8800)
    })