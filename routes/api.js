// API routes
// Will create two routes - one for getting all the students
// and one for adding a new student

let express = require('express')
let db = require('../models') //pulling from index.js
let Student = db.Student

// a router is something that matches requests to functions that can respond to them
let router = express.Router()

// so a request to students will cause the function to run
// order: starIR organizes the display by starID
router.get('/students', function(req, res, next){
    Student.findAll( {order: ['present', 'starID'] } ).then( students => { // take array of student info and because we have a promise we need to use a return:
        return res.json(students) // convert to json and return
    })
    .catch( err => next(err) )
})

router.post('/students', function(req, res, next){
    //req.body contains any json that our Vue client has sent in the request
    Student.create( req.body ).then( (data) => {
        // 201 is like a 404 or 500 message but in this case it's a successful message
        // 201 is the success code when something new is created
        return res.status(201).send('ok')
    })
       .catch( err => {
        //handle user errors:
        if (err instanceof db.Sequelize.ValidationError ) {
            // respond with a 400 Bad Request error code - database error
            // user has made a request the database doesn't understand or allow
            // reference to db is imported
            let messages = err.errors.map( e => e.message)
            return res.status(400).json(messages)
        }

        // otherwise, something unexpected has gone wrong - usually server or programmer error (code 500)
        // already wrote code for this so using next to say this route handler isn't going to handle it but will pass the responsibility to the already created function
        return next(err)
    })
})

// route to edit a student
router.patch('/students/:id', function(req, res, next) {
    //express has the above built in - match any request student/ANYTHING
    let studentID = req.params.id
    let updatedStudent = req.body
    Student.update( updatedStudent, { where: { id: studentID } } )
        .then ( () => {
            let numberOfRowsModified = rowsModified[0]
            if (numberOfRowsModified == 1) { // exactly one row was changed is good!
                return res.send('okie')  
            }   // if no rows were changed that student wasn't found so:
                else {
                return res.status(404).json(['Student with that id not found'])
            }
            
        })
        .catch( err => {
            // for validation errors"
            if (err instanceof db.Sequelize.ValidationError) {
                let messages = err.errors.map ( e => e.message)
                return res.status(400).json(messages)
            } else {
                // all other unexpected errors:
                return next(err)
            }
        })
})

// route to delete a student:
router.delete('/students/:id', function(req, res, next) {
    let studentID = req.params.id
    Student.destroy( { where: { id: studentID } } )
        .then( (rowsDeleted) => {
            if (rowsDeleted == 1) {
                return res.send('okay')
            } else {
                return res.status(404).json('Student not found')
            }
        })
        .catch( err => next(err) ) //
})






module.exports = router
