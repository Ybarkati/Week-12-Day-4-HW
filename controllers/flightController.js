// Bring in our flight data

// Load the flight model so we can interact with the collection
const Flight = require('../models/Flight')

// GET /flights
module.exports.index = async (req, res) => {
    try {
       let flight= await Flight.find().sort({departs:1})
       res.render("Index",{flight})

    } catch (error) {
        console.log(error)
    }
}


//  GET /flights/new
module.exports.new = (req, res) => {
    const newFlight = new Flight();
    
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
    console.log(departsDate)
  res.render("New",{departsDate})
}
module.exports.newDes = (req, res) => {
  res.render("Newdes",{id:req.params.id})
}

// POST /flights
module.exports.create = async (req, res) => {
    console.log(req.body,"herreeeeeeeeee")
    try {
        await Flight.create(req.body)
        res.redirect('/flight')
    } catch (error) {
        console.log(error)
    }
}

module.exports.createDes = async (req, res) => {
    console.log(req.params.id,"kiweeeeeeeeewiiri")
    try {
       const flight= await Flight.findById(req.params.id)
       flight.destinations.push(req.body)
       await Flight.findByIdAndUpdate(req.params.id,flight)
        res.redirect(`/flight/${req.params.id}`)
    } catch (error) {
        console.log(error)
    }
}

//  GET /flights/:id
module.exports.show = async (req, res) => {
     try {
        let flight=await Flight.findById(req.params.id)
        res.render("Show",{flight})
     } catch (error) {
        
     }
}


// PUT /flights/:indexOfFruit
module.exports.update = (req, res) => {
   
}


//  GET /fruits/:indexOfFruit/edit
module.exports.edit = async (req, res) => {
    
}