import React from 'react'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'

const TaskList = ({data}) => {
  
return (
    <div id='tasklist' className='flex mt-10 overflow-x-auto items-center justify-start gap-5 screen  h-[53%] rounded-xl' >
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
        return null;
      })}
    </div>
  )
}

export default TaskList