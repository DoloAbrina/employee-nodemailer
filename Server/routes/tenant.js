const express = require('express');
const TenantModel = require('../model/TenantModel');
const router = express.Router();
const multer = require('multer');


// define storage for images
const imageStorage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads/images/');
    },

    //add back the extension
    filename: function (request, file, callback) {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image.${Date.now()}.${ext}`);
    }
})

const isImage = (request,file, callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null,true);
    }
    else{
        callback(new Error('Only images are supported...'));
    }
}

const upload = multer({
    storage:imageStorage,
    fileFilter:isImage
});


router.post('/add_tenant',upload.single('photo'), async (req, res) => {
    let imgFilename = ''
    if(req.file === undefined){
        imgFilename = 'default.jpg'
    }
    else{
        imgFilename = req.file.filename
    }
    const tenant = new TenantModel({
        email: req.body.email,
        surname: req.body.surname,
        name: req.body.name,
        occupation: req.body.occupation,
        image: imgFilename,
        phoneNumber: req.body.phoneNumber,
        progress: 0
    });
    await tenant.save().then(data => res.send({ data, result: true })).catch(err => console.error(err, 'failed to save to the database'));
})

 
router.get('/getAllTenants', async (req, res) => {
    try {
        const tenents = await TenantModel.find()
        if (!tenents) {
            return res.send({ message: 'something went wrong' });
        }

        return res.json(tenents);
    }
    catch (err) {
        console.log({ message: err })
        res.send({ message: err })

    }
})

router.get('/getTenantById/:id', async (req, res) => {
    try {
        const tenant = await TenantModel.findById(req.params.id)
        res.json(tenant);
    }
    catch (err) {
        console.log({ message: err })
        res.send({ message: err })

    }
})

router.put('/updateTenant/:id', async (req, res) => {
    try {
        const updateTenant = await TenantModel.updateMany({ _id: req.params.id }, {
            $set: {
                email: req.body.email, surname: req.body.surname,name: req.body.name,phoneNumber: req.body.phoneNumber,
                  occupation: req.body.occupation, progress: req.body.progress
            }
        });
        res.send(updateTenant)
    } catch (err) {
        console.log({ message: err })
        res.send({ message: err })
    }
})

router.delete('/deleteTenat/:id', async (req, res) => {
    try {
        const deletTenant = await TenantModel.remove({ _id: req.params.id });
        res.json(deletTenant)
    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router;