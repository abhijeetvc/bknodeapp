const { default: mongoose } = require("mongoose");

module.exports=mongoose=>{

    let schema=mongoose.Schema({
        firstName:String,
        lastName:String,
        city:String,
    })

    const User=mongoose.model("user",schema)
    return User
}