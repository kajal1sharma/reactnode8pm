import React, { useState } from 'react'
import "./tictactoe.css"
const Tictactoe = () => {
     let arr = [".",".",".",".",".",".",".",".","."]
     
    const [stateArr, setStateArr] = useState(arr);
    const [player, setPlayer] = useState("X")
    return (
    <div style={{display:"grid", 
    gridTemplateColumns:"auto auto auto"}}>
      {stateArr.map(function(ele,ind){
        return <button
                onClick={function(){
                    console.log("function working")
                     
                    stateArr[ind]=player;
                    setPlayer(player==="X"?"0":"X")
                    // console.log(stateArr)
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
