import express from 'express';
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv";
import userRoute from "./routes/user.js"
import attendanceRoute from "./routes/attendance.js"
import cookieParser from "cookie-parser"
import cors from "cors";
dotenv.config();

app.use(express.json())
app.use(cookieParser())
app.use(cors());
//db connection
const connectMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("Connected to dataBase")
        
    } catch (error) {
        throw error;
    }
}
app.use("/api",userRoute)
app.use("/api",attendanceRoute)

app.listen(8800,()=>{
    connectMongoDB()
    console.log("connected to backend")
})