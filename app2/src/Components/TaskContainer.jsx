import React from 'react'
import SingleTask from './SingleTask'
const TaskContainer = () => {


  // let obj = {key : "value", key2 :" value2" , key3 : "value3"}

  return (
    <div style={{border:"5px solid blue", marginTop:"50px"}}>
      <SingleTask task="task 1"/>
      <SingleTask task="read some books" />
      <SingleTask task="go for a walk"/>
      <SingleTask task="do some exercise"/>
    </div>
  )
}

export default TaskContainer
