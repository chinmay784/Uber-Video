const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const cors = require("cors")
const app = express();
const connectionDB = require("./db/db");
const userRoutes = require("./routes/userRoute");
const captainRoutes = require('./routes/captainRoutes')
const cookieParser = require("cookie-parser")
connectionDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


// app.use("/",(req,res)=>{
//     res.send("API Working")
// })

app.use("/users",userRoutes)
app.use("/captains",captainRoutes)

module.exports = app;