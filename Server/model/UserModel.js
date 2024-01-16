const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    surname:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        dafualt:Date.now
    }
})



module.exports = mongoose.model('User', UserSchema);