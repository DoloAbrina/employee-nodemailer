const express = require('express');
const UserModel = require('../model/UserModel');
const router = express.Router();

router.post('/register', (req, res) => {
    const user = new UserModel({
        email: req.body.email,
        surname: req.body.surname,
        name: req.body.name,
        password: req.body.password
    });

    user.save().then(data => res.send({data, result:true})).catch(err => console.error(err, 'failed to save to the database'));
})

router.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({email:req.body.email})
        if(!user){
            return res.send({message:'Wrong username or password', result:false})
        }

        if(user.password === req.body.password){
            return res.json({user, result:true});
        }

        else{
            return res.send({message:'Wrong username or password', result:false})
        }
        
    }
    catch (err) {
        console.log({ message: err })
        res.send({ message: err })

    }
})

module.exports = router;