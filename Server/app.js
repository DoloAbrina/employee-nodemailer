require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/admin', require('./routes/admin'));
app.use('/tenant', require('./routes/tenant'));
// DB Connection here

mongoose.connect('mongodb://localhost:27017/restApiDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('we are connected')
})

app.use('/', (req, res) =>{
    res.send('Endpoint')
})
app.listen(process.env.PORT, () => {
    console.log('Server started at port ' + process.env.PORT)
})