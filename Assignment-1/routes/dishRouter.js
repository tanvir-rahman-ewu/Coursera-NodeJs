const express = require('express')
const boydParser = require('body-parser')
const dishRouter = express.Router()

dishRouter.use(boydParser.json())

///routing without parameter
dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
    next()
})
.get((req, res, next) =>{
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) =>{
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.send('PUT operation not supported on /dishes');
})
.delete((req, res, next) =>{
    res.send('Deleting all dishes');
})

///routing with parameter dishId
dishRouter.route('/:dishId')
.get((req, res)=>{
    res.send('Will send details of the dish : ' + req.params.dishId + ' to you!')
})
.post((req, res) =>{
    res.send('Post operation not supported on /dishes/' + req.params.dishId)
})
.put((req, res)=>{
    res.send('Updating the dish : ' + req.params.dishId +  '\n will update the dish : ' + req.body.name +' with details : ' + req.body.description)
})
.delete((req, res) =>{
    res.send('Deleteing the dish : ' + req.params.dishId)
})

module.exports = dishRouter