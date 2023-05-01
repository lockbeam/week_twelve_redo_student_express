// this file will do some configuration with sequelize and students relationship to the database it creates
// reads in database connection settings from config.json

let { Sequelize, DataTypes } = require('sequelize')

// below means read from an environment variable and see what the value of that environment variable is
// could be development or production environments for example
// if there is no defined env variable default to development
let env = process.env.NODE_ENV || 'development'

console.log('using environment ' + env) // used for debugging

// below will read all of the json from config.json
// and turn it into and Object 
let configFile = require(__dirname + '/../config.json')
let config = configFile[env]

// storing passwords locally instead of in code that could be accesssed
// we'll still have to set DB-PASSWORD env variable at Azure
let password = process.env.DB_PASSWORD
config.password = password

let db = {}

let sequelize = new Sequelize(config)

// the studentModel exports a function
let studentModelCreate = require('./student') // a function definition
let studentModel = studentModelCreate(sequelize, DataTypes)

db[studentModel.name] = studentModel

db.sequelize = sequelize // configuration
db.Sequelize = Sequelize // actual Library

module.exports = db // pckage everything into this nice db object



