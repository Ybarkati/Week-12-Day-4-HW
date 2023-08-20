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
    return (
        <div>
            <h1>All flights</h1>
            <br />
            <a href="/flight/new">ADD FLIGHT</a>   <a href="/flight">ALL FLIGHTS</a>
            <hr />
            
            <br /> 
            {flight.map((flight,i) =>{
                const isPassed=time<flight.departs.getTime()
                return (

                    <div key={i} style={isPassed? style2:style1}>
                        <hr />
                        <h2><span>Airline: </span>{flight.airline}</h2>
                        <h4><span>Flight Number: </span>{flight.flightNo}</h4>
                        <h4><span>depart : </span>{flight.departs.toString()}</h4>
                        <a href={`/flight/${flight._id}`}>detail</a>
                    </div>
                )
            } 
                
            )}
            
        </div>
    )
}

export default Index;