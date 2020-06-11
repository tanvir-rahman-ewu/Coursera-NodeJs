const express = require('express')
const boydParser = require('body-parser')
const leadersRouter = express.Router()

leadersRouter.use(boydParser.json())

///routing without parameter
leadersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
    next()
})
.get((req, res, next) =>{
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) =>{
    res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.send('PUT operation not supported on /leaders');
})
.delete((req, res, next) =>{
    res.send('Deleting all leaders');
})

///routing with parameter dishId
leadersRouter.route('/:leaderId')
.get((req, res)=>{
    res.send('Will send details of the leader : ' + req.params.leaderId + ' to you!')
})
.post((req, res) =>{
    res.send('Post operation not supported on /leader/' + req.params.leaderId)
})
.put((req, res)=>{
    res.send('Updating the leader : ' + req.params.leaderId +  '\n will update the leader : ' + req.body.name +' with details : ' + req.body.description)
})
.delete((req, res) =>{
    res.send('Deleteing the leader : ' + req.params.leaderId)
})

module.exports = leadersRouter