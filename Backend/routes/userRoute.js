const express = require("express");
const router = express.Router();
const { body} = require("express-validator");
const { registerUser, loginUser, getUserProfile, logoutUser } = require("../controllers/userController");
const { authUser } = require("../middlewares/authMiddleware");

router.post("/register", [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min :3}).withMessage("First name must be at least 3 character long"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 character long")
],registerUser);

router.post("/login",[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 character long")
],loginUser);

router.get('/logout',authUser,logoutUser);

router.get("/profile",authUser,getUserProfile);

module.exports = router;