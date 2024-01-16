const mongoose = require('mongoose');


const TenantSchema = mongoose.Schema({
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
    phoneNumber:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:false
    },
    occupation:{
        type:String,
        require:true
    },
    progress:{
        type:Number
    },
    date:{
        type:Date,
        dafualt:Date.now
    }
})

module.exports = mongoose.model('Tenant',TenantSchema);