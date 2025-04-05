import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className='flex-shrink-0 h-full w-[320px] bg-green-400  items-start justify-start rounded-2xl'>
    <div className='flex items-center justify-between mx-5 my-6'>
    <h3 className='bg-red-600 rounded text-xl px-2 py-0'>{data.category}</h3>
    <h4 className='text-lg font-semibold '>{data.taskDate}</h4>
    </div>
    <div className='mx-6'>
    <h2 className='text-2xl font-extrabold text-white'>{data.
taskTitle}</h2>
    <p className='text-2sm mt-2'>{data.
taskDescription}</p>
    </div>
    <div className='flex items-center justify-center mt-4'>
      <button className='bg-green-800 px-2  py-1 rounded text-white text-lg hover:cursor-pointer hover:bg-green-950'>TaskAccept</button>
    </div>
   </div>
  )
}

export default AcceptTask