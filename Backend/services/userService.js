const userModel = require("../models/userModel");

module.exports.creatUser = async ({ firstname, lastname, email, password }) => {
    if(!firstname || !email || !password){
        throw new Error("All Fileds are require");
    }

    const user = userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    });

    return user;
}