import React from 'react'

const CreateTask = () => {
  return (
    <div className='flex items-start justify-center gap-30  px-4 py-2 bg-gray-700  mt-10 mx-30 rounded-lg'>
      <div className='text-lg'>
      <div className='mt-8'>
        <h2>Task Title</h2>
        <input className='border-2 px-1 rounded' type="text"  placeholder='Make a UI design'/>
      </div>

      <div className='mt-2'>
        <h2>Date</h2>
        <input className='border-2 px-1 rounded' type="date"/>
      </div>

      <div className='mt-2'>
        <h2>Asign to</h2>
        <input className='border-2 px-1 rounded' type="text" placeholder='Employee name'/>
      </div>

      <div className='mt-2'>
        <h2>Category</h2>
        <input className='border-2 px-1 rounded' type="text" placeholder='Design,dev,etc'/>
      </div>
</div>
<div className='flex flex-col'>
  <h2 className='mt-8 text-2xl'>Description</h2>
  <textarea className='border-2 px-1 rounded' name="" id="" rows={8} cols={30}></textarea>
  <button className='bg-emerald-600 rounded mt-2 font-medium text-lg'>Create Task</button>
</div>

    </div>
  )
}

export default CreateTask