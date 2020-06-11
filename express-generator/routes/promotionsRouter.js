const express = require('express')
const bodyParser = require('body-parser')

const promotionsRouter = express.Router()
promotionsRouter.use(bodyParser.json())

promotionsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain');
        next()
    })
    .get((req, res) => {
        res.send('Will send all the promotions to you!')
    })
    .post((req, res) => {
        res.send('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.send('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.send('Deleting all promotions');
    })

promotionsRouter.route('/:promotionId')
    .get((req, res) => {
        res.send('Will send details of the promostions: ' + req.params.promotionId + ' to you!')
    })
    .post((req, res) => {
        res.send('Post operation not supported on /promotions/' + req.params.promotionId)
    })
    .put((req, res) => {
        res.send('Updating the promotions : ' + req.params.promotionId + '\n will update the promotions : ' + req.body.name + ' with details : ' + req.body.description)
    })
    .delete((req, res) => {
        res.send('Deleteing the promotions : ' + req.params.promotionId)
    })

module.exports = promotionsRouter