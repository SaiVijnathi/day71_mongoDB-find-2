const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/Employees",async(req,res)=>{   
    let employees = await Employee.find()

    //.distinct("gender");
    
    // .sort("department country");
    
    //.select("firstName lastName -_id");
    
    // .and(
    //         [
    //             {country:"Indonesia"},
    //             {gender:"Female"},
    //             {age:{$gte:20,$lte:40}}
    //         ]
    //     ).countDocuments();
    
    // .or(
    //     [
    //         {country:"Russia"},
    //         {gender:"Male"},
    //         {age:{$gte:20,$lte:40}}
    //     ]
    // );

    // .and(
    //     [
    //         {country:"Russia"},
    //         {gender:"Male"},
    //         {age:{$gte:20,$lte:40}}
    //     ]
    // );

    //.skip(150);

    //.limit(100);

    res.json(employees);
})

app.listen(8888,()=>{
    console.log("Listening to port 8888");
});

let employeeSchema = new mongoose.Schema({
    id:Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    age: Number,
    department: String,
    country: String,
    profilePicture: String,
});

let Employee = new mongoose.model("Employees", employeeSchema, "Employees");



let connectToMDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://saivijnathitatikonda:saivijnathi@day68-intro-to-mongodb.q4dsd.mongodb.net/BRNDB?retryWrites=true&w=majority&appName=day68-Intro-to-MongoDB");
        console.log("Successfully connected to mongoDB");
    }
    catch(err){
        console.log("Unable to connect to MDB");
    }
};

connectToMDB();