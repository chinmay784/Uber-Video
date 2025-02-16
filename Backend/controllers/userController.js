const userModel = require("../models/userModel");
const userService = require("../services/userService")
const { validationResult } = require("express-validator")
const blacklistTokenModel = require("../models/blackListToken")


exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    };

    const { fullname, email, password } = req.body;

    const hashpassword = await userModel.hashPassword(password);

    const user = await userService.creatUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashpassword,
    })

    const token = user.generateAuthToken();

    res.status(201).json({
        token,
        user,
    })
};


exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    };

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or passwod"
        })
    };

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid email or passwod"
        })
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({
        token,
        user,
    })
};



exports.getUserProfile = async (req,res,next) =>{
    res.status(200).json(req.user);
}


exports.logoutUser = async (req,res,next)=>{
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    await blacklistTokenModel.create({token});

    res.status(200).json({
        message:"Logged Out"
    })
}