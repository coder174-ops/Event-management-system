import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div  className='flex mt-10 justify-center gap-5 screen' >
      <div className='bg-red-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data. taskSummary.failed}</h2>
      <h3 className='text-2xl font-medium'>failed</h3>
      </div>
      <div className='bg-blue-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data. taskSummary.active}</h2>
      <h3 className='text-2xl font-medium'>active</h3>
      </div>
      <div className='bg-green-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data. taskSummary.completed}</h2>
      <h3 className='text-2xl font-medium'>completed</h3>
      </div>
      <div className='bg-yellow-400 w-[45%] h-40 px-6 py-9 rounded-xl'>
      <h2 className='text-2xl font-semibold'>{data. taskSummary.newTask}</h2>
      <h3 className='text-2xl font-medium'>newTask</h3>
      </div>
    </div>
  )
}

export default TaskListNumber