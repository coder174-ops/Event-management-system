import React, { useState } from 'react'

const CreateTask = () => {

 const [taskTitle, setTaskTitle] = useState('')
 const [taskDate, setTaskDate] = useState('')
 const [assignTo, setAssignTo] = useState('')
 const [descriptation, setDescriptation] = useState('')
 const [category, setCategory] = useState('')

 const [newTask, setNewTask] = useState({})

const submitHandler=(e)=>{
   e.preventDefault();

   setNewTask({taskTitle,descriptation,taskDate,category,active:false,newTask:true,failed:false,completed:false})

   const data=JSON.parse(localStorage.getItem('employees'));

   data.forEach(function(elem){
       if(assignTo == elem.firstName){
         elem.tasks.push(newTask);
        console.log(elem);
       }
   })

   setTaskTitle('');
   setTaskDate('');
   setAssignTo('');
   setDescriptation('');
   setCategory('');
}


  return (
    <div className='flex items-start justify-center gap-30  px-4 py-2 bg-gray-700 mx-30 rounded-lg'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='text-lg '>
      <div className='mt-1'>
        <h2>Task Title</h2>
        <input
         value={taskTitle}
         onChange={(e)=>{
          setTaskTitle(e.target.value);
         }}
        className='border-2 px-1 rounded' type="text"  placeholder='Make a UI design'/>
      </div>

      <div className='mt-2'>
        <h2>Date</h2>
        <input 
        value={taskDate}
        onChange={(e)=>{
         setTaskDate(e.target.value);
        }}
        className='border-2 px-1 rounded' type="date"/>
      </div>

      <div className='mt-2'>
        <h2>Assign to</h2>
        <input
          value={assignTo}
          onChange={(e)=>{
           setAssignTo(e.target.value);
          }}
        className='border-2 px-1 rounded' type="text" placeholder='Employee name'/>
      </div>

      <div className='mt-2'>
        <h2>Category</h2>
        <input 
        value={category}
        onChange={(e)=>{
         setCategory(e.target.value);
        }}
        className='border-2 px-1 rounded' type="text" placeholder='Design,dev,etc'/>
      </div>

<div className='flex flex-col'>
  <h2 className='mt-8 text-2xl'>Description</h2>
  <textarea 
    value={descriptation}
    onChange={(e)=>{
     setDescriptation(e.target.value);
    }}
  className='border-2 px-1 rounded' name="" id="" rows={8} cols={30}></textarea>
  <button   className='bg-emerald-600 rounded mt-2 font-medium text-lg'>Create Task</button>
</div>
</form>
    </div>
  )
}

export default CreateTask