const mongoose = require('mongoose')

const Schema = mongoose.Schema
const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date,
    }
})
// this Schema acts as a blueprint for our data
const FlightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest","United"]
    },
    flightNo: {
        type: Number,
        required: true,
        minimum: 10,
        maximum: 9999,
    },
    departs: {
        type: Date,
        default:Date()
    },
    airport: {
        type: String,
        default:"SAN",
        enum: ['SAN','AUS', 'DAL', 'LAX',  'SEA']
    },
    destinations:{
        type:[destinationSchema],
    }

})

// 1st argument is the collection, 2nd is the Schema (blueprint) 
const Flight = mongoose.model('flight', FlightSchema)

module.exports = Flight
