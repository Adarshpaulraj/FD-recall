const mongoose = require('./index')
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:[true,"fristNme required"]
    },
    lastName:{
        type:String,
        required:[true,"LastName required"]
    },
    email :{
        type : String,
        Validate:[validateEmail,"Enter valid Email"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},{
    versionKey:false
})

const userModel = mongoose.model("modelUser",userSchema)
module.exports = userModel