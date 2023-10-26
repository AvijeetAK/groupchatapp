const express = require('express');

const fs = require('fs');

const adminRouter = express.Router();


adminRouter.get('/login',(req,res,next) => {

    
    res.send('<body><form action="/messages" method="POST"><label for="user">Username</label><input type="text" name="user"><button type="submit">Login</button></form></body>');
    
});


/* adminRouter.post('/login', (req,res,next) => {

    console.log(req.body);

})*/



module.exports = adminRouter;