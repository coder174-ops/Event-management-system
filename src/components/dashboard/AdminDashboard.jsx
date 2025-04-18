import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='p-15 bg-[#1c1c1c] h-screen'>
     <Header changeUser={props.changeUser}/>
     <CreateTask/>
     <AllTask/>
  </div>
  )
}

export default AdminDashboard