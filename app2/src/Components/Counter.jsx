import React  from 'react'
import {useState} from 'react'
const Counter = () => {
  //let val = 1;
  const [val,setVal ] = useState(1);
  function incHandler(){
    // val++;
    setVal(val+1)
    console.log(val);
  }
  function decHandler(){
    // val++;
    setVal(val-1)
    console.log(val);
  }

   return (
    <div>
      <h1 style={{color:"white",fontSize:"70px",textAlign:"center"}}>Counter</h1>
      <h2 style={{color:"white",fontSize:"70px",textAlign:"center"}}>{val}</h2>
      <button style={{padding:"30px"}} onClick={incHandler}>Inc</button>
      <button style={{padding:"30px"}} onClick={decHandler}>Dec</button>
    </div>
   )
}

export default Counter
