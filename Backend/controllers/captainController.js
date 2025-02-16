const blackListToken = require("../models/blackListToken");
const captainModel = require("../models/captainModel");
const captainService = require("../services/captainService");
const { validationResult } = require("express-validator")


exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult((req));
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    };

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainExist = await captainModel.findOne({ email });

    if (isCaptainExist) {
        return res.status(400).json({
            message: "Captain Already exist"
        })
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({
        token,
        captain,
    })
};



exports.loginCaptain = async (req, res,) => {
    const errors = validationResult((req));
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    };


    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password')

    if (!captain) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const isMatchPassword = captain.comparePassword(password);

    if (!isMatchPassword) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token);

    res.status(201).json({
        token,
        captain,
    })

};



exports.captainProfile = async (req,res,next) =>{
    res.status(200).json({
        captain:req.captain
    })
}


exports.logOutCaptain = async (req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split("")[ 1]

    await blackListToken.create({token})

    res.clearCookie("token");
    res.status(200).json({message : "logout successfully"})
}