import React from 'react'

function New({id}) {
    const airports=['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    return (
        <div>
            <h1>Create new flight</h1>
            <br />
            <a href="/flight/new">ADD FLIGHT</a>   <a href="/flight">ALL FLIGHTS</a>
            <hr />
            
            <br /> <br />
            <form action={`/flight/${id}`} method='POST'>
                <select name="airport" id='airport' >
                    {airports.map((element,i)=>
                         <option key={i} >{element}</option>
                    )}
                </select>
                <br/><br/>
                <input type="datetime-local"  name="arrival" id="arrival"  />
                <br/><br/>
                <button >submit</button>
            </form> 
        </div>
    )
}

export default New;