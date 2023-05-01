let express = require('express')

//creating API routes
let api_routes = require('./routes/api.js')

//creating web app
let app = express()

// app needs to be able process json data sent in the body of a request and convert to javascript:
app.use(express.json())

//allow the app to use and respond to the routes
app.use('/api', api_routes)

// error handlings for general and server errors:
app.use(function(req, res, next) {
    // responds with a 404 message for any other requests through a route we haven't configured
    res.status(404).send('Not found')
})

//server errors:
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})


let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})