import Attendance from "../models/Attendance.js";
import { ObjectId } from 'mongodb';
import * as bson from "bson";
export  const addAttendace=async (req,res)=>{
    try {
        let data = req.body;
        let {userId,loginTime,logoutTime,employeeId}=data;
        // data.userId=req.params.userId
        const saveData = Attendance.create(data)
        return res.status(201).json("attendance added succefully")
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message)
    }

}
export  const getlastAttendace=async (req,res)=>{
    try {
        const filter={}
        if(req.query.filterByUserId){
            filter["userId"]={'$eq': new ObjectId(req.query.filterByUserId) }
        }
        const userAttendanceData= await Attendance.findOne({userId:req.query.filterByUserId}).sort({createdAt:-1})
            
        return res.status(200).json(userAttendanceData)
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message)

    }
}

export  const getAttendace=async (req,res)=>{
    try {
        const filter={}
        if(req.query.filterByUserId){
            filter["userId"]={'$eq': new ObjectId(req.query.filterByUserId) }
        }
        console.log(filter)
        const userAttendanceData= await Attendance.aggregate([
            {$match:{userId:new ObjectId(req.query.filterByUserId)}},
            // {
            //     $lookup:{
            //         from:"users",
            //         localField:'userId',
            //         foreignField:'_id',
            //         as:'userDetails'
            //     }
            // }
        ])
        console.log(userAttendanceData)
        return res.status(200).json(userAttendanceData)
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json(error.message)

    }

}