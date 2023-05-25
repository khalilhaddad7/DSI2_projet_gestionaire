import  express  from "express";
import User from "./routers/Users.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import Emploi from "./routers/Emplois.js";

export const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(
    fileUpload({
      limits: { fileSize: 50 * 1024 * 1024 },
      useTempFiles: true,
    })
  );
 

app.use("/api/users" , User);
app.use("/api/emploi" , Emploi);
