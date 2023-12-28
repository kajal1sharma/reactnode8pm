import React, { useState } from 'react'
import "./tictactoe.css"
const Tictactoe = () => {
     let arr = [".",".",".",".",".",".",".",".","."]
     
    const [stateArr, setStateArr] = useState(arr);
    const [player, setPlayer] = useState("X")
    const [win , setWin] = useState(false)
    function checkWinner(p){
        // row 1
        if(stateArr[0]===p && stateArr[1]===p && stateArr[2]===p){
          return true;
        }
        else if(stateArr[1]===p && stateArr[4]===p && stateArr[5]===p){
          return true;
        }
        else if(stateArr[6]===p && stateArr[7]===p && stateArr[8]===p){
          return true;
        }
        else if(stateArr[0]===p && stateArr[3]===p && stateArr[6]===p){
          return true;
        }
        else if(stateArr[1]===p && stateArr[4]===p && stateArr[7]===p){
          return true;
        }
        else if(stateArr[2]===p && stateArr[5]===p && stateArr[8]===p){
          return true;
        }
        else if(stateArr[0]===p && stateArr[4]===p && stateArr[8]===p){
          return true;
        }
        else if(stateArr[2]===p && stateArr[6]===p && stateArr[4]===p){
          return true;
        }
        else{
          return false;
        }
        
      }
    return (
    <div style={{display:"grid", 
    gridTemplateColumns:"auto auto auto"}}>
      {stateArr.map(function(ele,ind){
        return win===false ?<button
                onClick={function(){
                    console.log("function working")
                    let result =false;
                     if(stateArr[ind]===".")
                        {
                          stateArr[ind]=player;
                          result = checkWinner(player);
                          setWin(result);
                          setPlayer(player==="X"?"0":"X")
                        }
                    // console.log(stateArr)
                  
                    setStateArr([...stateArr])
                   

                }}
        >
            {ele}
            </button>:<button>{ele}</button>
      })}
      {win===true?<p>player {player==="X"?"0":"X"} has won the match</p>:<></>}
    </div>
  )
}

export default Tictactoe
