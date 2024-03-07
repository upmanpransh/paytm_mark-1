const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password: {
        type:String,
        required:true,
        minLength:6
    },
    firstName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastNmae: {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
})

const User= mongoose.model("User", userSchema);

const accountSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:number,
        required:true
    }
});

const Account = mongoose.model('Account',accountSchema);


module.exports={
    User,
    Account
}