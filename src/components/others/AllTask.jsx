import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

 const [userData,setUserData]=useContext(AuthContext)

  return (
   <div id='alltask' className=' mt-5 rounded bg-[#1c1c1c]'>
   <div className='flex items-start justify-between gap-30  px-9 py-2 bg-red-400  mt-2 mx-30 rounded-lg'>
      <h2 className='font-mediuw text-lg w-1/5'>Employee Name</h2>
      <h3 className='font-mediuw text-lg w-1/5 '>New Task</h3>
      <h5 className='font-mediuw text-lg w-1/5 '>Active Task</h5>
      <h5 className='font-mediuw text-lg w-1/5 '>Completed</h5>
      <h5 className='font-mediuw text-lg w-1/5 '>Failed</h5>
   </div>
       <div >
       {userData.employees.map(function(elem,idx){
         return <div className='flex items-start justify-between gap-30  px-9 py-1.5 border-2 border-blue-400  mt-2 mx-30 rounded-lg'>
         <h2 className='font-medium text-lg w-1/5'>{elem.firstName}</h2>
         <h3 className='font-medium text-lg w-1/5 text-pink-400'>{elem.taskSummary.newTask}</h3>
         <h5 className='font-medium text-lg w-1/5 text-yellow-400'>{elem.taskSummary.active}</h5>
         <h5 className='font-medium text-lg w-1/5  text-green-600'>{elem.taskSummary.completed}</h5>
         <h5 className='font-medium text-lg w-1/5 text-red-600'>{elem.taskSummary.failed}</h5>
      </div>
      })}
       </div>
   </div>
  )
}

export default AllTask