import React, { useState } from 'react'
import "./tictactoe.css"
const Tictactoe = () => {
     let arr = [".",".",".",".",".",".",".",".","."]
    const [stateArr, setStateArr] = useState(arr);
    return (
    <div style={{display:"grid", 
    gridTemplateColumns:"auto auto auto"}}>
      {stateArr.map(function(ele,ind){
        return <button
                onClick={function(){
                    console.log("function working")
                     
                    stateArr[ind]="X"
                    console.log(stateArr)
                    setStateArr([...stateArr]) 
                }}
        >
            {ele}
            </button>
      })}
    </div>
  )
}

export default Tictactoe
