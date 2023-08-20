import React from 'react'

function New({departsDate}) {
    const AirLines=["American", "Southwest","United"]
    return (
        <div>
            <h1>Create new flight</h1>
            <br />
            <a href="/flight/new">ADD FLIGHT</a>   <a href="/flight">ALL FLIGHTS</a>
            <hr />
            
            <br /> <br />
            <form action="/flight" method='POST'>
                <select name="airline" id='airline' >
                    {AirLines.map((element)=>
                         <option  >{element}</option>
                    )}
                </select>
                <br/><br/>
                <input type="number" min={10} max={9999} name='flightNo' id='flightNo' placeholder='number 10-9999' />
                <br/><br/>
                <input type="datetime-local" defaultValue={departsDate} name="departs" id="departs"  />
                <br/><br/>
                <button >submit</button>
            </form>
            
            
        </div>
    )
}

export default New;