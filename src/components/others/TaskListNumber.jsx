import React from 'react'

const TaskListNumber = () => {
  return (
    <div  className='flex mt-10 justify-center gap-5 screen' >
      <div className='bg-red-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='bg-blue-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='bg-green-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='bg-yellow-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber