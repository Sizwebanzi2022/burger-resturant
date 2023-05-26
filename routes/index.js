const express = require('express');
const router  = express.Router()

router.get('/',(req,res)=>{
    res.sendFile('./public/index')
})

router.get('/menu',(req,res)=>{
    res.sendFile('./public/menu')
})


    
module.exports = router