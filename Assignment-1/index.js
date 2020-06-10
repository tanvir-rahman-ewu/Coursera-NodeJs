const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const port = 8080
const host = 'localhost'

const dishRouter = require('./routes/dishRouter')
const promotionsRouter = require('./routes/promotionsRouter')
const leadersRouter = require('./routes/leadersRouter')


const app = express()
const server = http.createServer(app)
server.listen(port, host, ()=>{
    console.log("server is running")
})

app.use(bodyParser.json())

app.use('/dishes', dishRouter)
app.use('/promotions', promotionsRouter)
app.use('/leaders', leadersRouter)


