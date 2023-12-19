// functional componnet creation
// javascript XMl => tags
// only one Jsx can be returned from a componet

import { useState } from "react"
import Counter from "./Components/Counter"

// If you write js inside your JSx => use {}
import InputContainer from "./Components/InputContainer"
import TaskContainer from "./Components/TaskContainer"
function App(){

  const [input , setInput] = useState("");

  let styleObj = {width:"400px",height:"500px", backgroundColor:"black"}


  return (
    <div style={styleObj}>
      {/* <Counter/> */}
      <InputContainer setInput={setInput}/>
      <TaskContainer task={input}/> 
      {/* {console.log("hello world")}
      {console.log(styleObj)*/}
    </div>
    
    // document.createElement('h1')
  )
}

export default App