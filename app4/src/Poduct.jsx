import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
const Poduct = () => {
  const [num , setNum] = useState(0);
  const dispatch =useDispatch();
  const state = useSelector(state=>state)
  // console.log(state);
 // let state=[]
 //when component is loaded for the first time
  useEffect(function(){
    console.log("useeffect  :  "+state)
  },[state])//dependency array => state data

  return (
    <div>
      {console.log("application has started")}
       <button onClick={()=>{
         dispatch({type:"PRODUCT_LIST"})
       }}>Click1</button>

        <button onClick={()=>{
         dispatch({type:"PRODUCT_COST"})
       }}>Click2</button>
    </div>
  )
}

export default Poduct
