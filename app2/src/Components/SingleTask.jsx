import React from 'react'

const SingleTask = ({task, taskno}) => {
  // destrucruring
  // console.log(props)
  // let task = props.task;
  return (
    <div>
          <div style={{marginTop:"10px",textAlign:"center",border:"5px solid pink",color:"white", fontSize:"24px"}}>
                {taskno}
                {task}
                <button>delete</button>
          </div>
          
    </div>
    
  )
}

export default SingleTask
