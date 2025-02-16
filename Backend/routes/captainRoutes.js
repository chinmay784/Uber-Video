const express = require("express")
const {body} = require("express-validator");
const { registerCaptain, loginCaptain, captainProfile, logOutCaptain } = require("../controllers/captainController");
const { authCaptain } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("Firstname at least 3 character"),
    body("password").isLength({min:6}).withMessage("password at least 6 character"),
    body("vehicle.color").isLength({min:3}).withMessage("color at least 3 character"),
    body("vehicle.plate").isLength({min:3}).withMessage("plate must at least 3 character"),
    body("vehicle.capacity").isInt({min:1}).withMessage("capacity at least 1 "),
    body("vehicle.vehicleType").isIn(["car","motercycle", "auto"]).withMessage("invalid vechileType "),  
],registerCaptain);

router.post("/login",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("password at least 6 character"),
],loginCaptain);

router.get("/profile",authCaptain,captainProfile);
router.get("/logout",authCaptain,logOutCaptain)

module.exports = router;