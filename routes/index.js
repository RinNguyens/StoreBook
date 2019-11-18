const express =  require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Index = require('../models/index');

// GET ALL INDEX 

router.get('/',(req,res) => {
    res.render('index');
});


// POST api 




module.exports = router;