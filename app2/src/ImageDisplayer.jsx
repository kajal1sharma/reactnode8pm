import React from 'react'
import arr from './data/images'


const ImageDisplayer = () => {
  return (
    <div>
        {arr.map(function(ele){
            return <img src={ele} style={{width:"200px", height:"200px"}} alt=""/>
        })}
        

      {/* <img src={arr[0]} style={{width:"200px", height:"200px"}} alt=""/>

      <img src={arr[1]} style={{width:"200px", height:"200px"}} alt=""/>

      <img src={arr[2]} style={{width:"200px", height:"200px"}} alt=""/>

      <img src={arr[3]} style={{width:"200px", height:"200px"}} alt=""/> */}
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s" alt=".."/> */}
    </div>
  )
}

export default ImageDisplayer
