const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListToken = require("../models/blackListToken")
const captainModel = require("../models/captainModel");

exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        })
    };

    const isBlackListed = await blackListToken.findOne({ token: token });

    if (isBlackListed) {
        return res.status(401).json({
            message: "UnAuthorized",
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Unauthorized",
        })
    }
};

exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        })
    }


    const isBlackListed = await blackListToken.findOne({ token: token });

    if (isBlackListed) {
        return res.status(401).json({
            message: "UnAuthorized",
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;

        return next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Unauthorized",
        })
    }
}