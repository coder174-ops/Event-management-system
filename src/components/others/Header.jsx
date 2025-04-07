import React from 'react'

const Header = (props) => {

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('');
    // window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>username 👏</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 rounded px-2 py-1 text-white font-semibold text-lg'>Log Out</button>
    </div>
  )
}

export default Header