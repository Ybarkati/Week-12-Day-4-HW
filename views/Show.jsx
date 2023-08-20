import React from 'react'
const style1={
    color:"red"
}
const style2={
    color:"green"
}
function Index({flight}) {
    const currentDate=new Date()
    const time=currentDate.getTime()
    const isPassed=time<flight.departs.getTime()
    return (
        <div>
            <h1>All flights</h1>
            <br />
            <a href="/flight/new">ADD FLIGHT</a>   <a href="/flight">ALL FLIGHTS</a>
            <hr />
            
            <br /> 
                    <div style={isPassed? style2:style1}>
                        <hr />
                        <h2><span>Airline: </span>{flight.airline}</h2>
                        <h4><span>Flight Number: </span>{flight.flightNo}</h4>
                        <h4><span>depart : </span>{flight.departs.toString()}</h4>

                        <h4><span>airport: </span>{flight.airport}</h4>
                        <hr />
                        {flight.destinations !=[] && flight.destinations.map((element,i)=>{
                            return(
                                <div key={i} >
                                    
                                    <h5>airport: {element.airport}</h5>
                                    <h5>arrival: {element.arrival.toString()}</h5>
                                    
                                </div>
                            )

                        })}
                        <hr />
                    </div>
                    <a href={`/flight/newDes/${flight._id}`}>add destinations</a>
        </div>
    )
}

export default Index;