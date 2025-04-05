import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-15 bg-[rgb(28,28,28)] h-screen'>
    <Header data={data}/>
    <TaskListNumber data={data}/>
    <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard