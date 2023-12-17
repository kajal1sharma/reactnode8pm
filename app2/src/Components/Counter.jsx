import React, { useState } from 'react'

const Counter = () => {
    // let value =1;
    const [value, setValue] = useState(1)
  return (
    <div style={{color:"white"}}>
      <h1>Counter</h1>
      <p style={{fontSize:"24px", marginLeft:"70px"}}>{value}</p>
      <button  onClick={function(){
        setValue(value+1)
        console.log(value)
        console.log("increment")
      }}>
        Increment
    </button>
      <button onClick={function(){
        setValue(value -1)
        console.log(value)
        console.log("decrement")
      }}>Decrement</button>
    </div>
  )
}

export default Counter
