// functional componnet creation
// javascript XMl => tags
// only one Jsx can be returned from a componet

// If you write js inside your JSx => use {}
import InputContainer from "./Components/InputContainer"
import TaskContainer from "./Components/TaskContainer"
function App(){
  let styleObj = {width:"400px",height:"500px", backgroundColor:"black"}


  return (
    <div style={styleObj}>
      <InputContainer/>
      <TaskContainer/>
      {/* {console.log("hello world")}
      {console.log(styleObj)} */}
    </div>
    
    // document.createElement('h1')
  )
}

export default App