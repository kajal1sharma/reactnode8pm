import React from 'react'

const InputContainer = () => {
  let input ="";
  
  return (
    <div style={{display:"flex",justifyContent:"center",paddingTop:"50px"}}>
        <input onChange={function(event){
          input=event.target.value;
          console.log(input)
        }} style={{padding:"20px 30px"}} />
        <button style={{padding:"20px 30px"}}>Add</button>
    </div>
  )
}

export default InputContainer
