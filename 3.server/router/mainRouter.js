const express = require('express');
const router = express.Router();

router.get("/", function(req,res){
    res.send('Hi~~~~!')
})

router.get("/about", function(req,res){
    res.send('About Page')
})

mudule.exports = router