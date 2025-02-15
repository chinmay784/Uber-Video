const mongoose = require("mongoose");

function connectionDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
}

module.exports = connectionDB;