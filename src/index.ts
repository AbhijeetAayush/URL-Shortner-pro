import express from "express";
import dotenv from "dotenv";
//import cors from "cors";
import connectDB from "./config";
import router from "./routes/urlRoutes";

dotenv.config();
const app = express();

//app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
