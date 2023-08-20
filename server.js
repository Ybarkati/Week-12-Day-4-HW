const express = require("express")
const app= express()

// Make environment variables available to your application
require('dotenv').config()

// Load the configuration function
const mongoConfig = require('./config/database')

// Setup connection to MongoDB
mongoConfig()


// Load the create engine function
const jsxEngine = require('jsx-view-engine')

// Load the method override function
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

// give our form more HTTP method to work with (like DELETE and PUT)
app.use(methodOverride('_method'))

// A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: true }))
const PORT = 3030
const flightRoutes=require("./routes/flightRoutes")
app.use("/flight",flightRoutes)
app.listen(PORT,()=>{
    console.log(PORT)
})