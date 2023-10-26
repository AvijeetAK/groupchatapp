const express = require('express');

const fs = require('fs');

const messageRoute = express.Router();



messageRoute.post('/messages', (req,res,next) => {

    res.send('<form action="/" method="POST"><label for="msg">Type your msg</label><input type="text" name="msg"><button type="submit">Send</button></form>');
    fs.writeFileSync("user.txt", req.body.user);

});

messageRoute.post('/', (req,res,next) => {

    res.send(`${fs.readFileSync('msg.txt')}<form action="/" method="POST"><label for="msg">Type your msg</label><input type="text" name="msg"><button type="submit">Send</button></form>`);
    fs.appendFileSync("msg.txt", " " + fs.readFileSync('user.txt') + " " + req.body.msg + " ");
    
})

module.exports = messageRoute;