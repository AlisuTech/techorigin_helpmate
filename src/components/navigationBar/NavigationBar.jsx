import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
      <nav className="grid md:grid-cols-2 grid-cols-1 bg-[#adbbda] py-4 px-4 space-y-4 md:space-y-0">
        <div className='text-[35px] font-[600]'>HelpMate</div>
        <div className='md:text-end'>
          <ul className='my-auto space-x-4'>
              <Link to="/">Home</Link>
              <Link >About</Link>
              <Link >Contact</Link>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Register</Link>
          </ul>
        </div>
      </nav>
        {/* <nav className='bg-[#adbbda] py-4 px-4'>
          <div className=' flex justify-between'>
            <div className='text-[35px] font-[600]'>HelpMate</div>
            <ul className='border-green my-auto space-x-4'>
              <Link to="/">Home</Link>
              <Link >About</Link>
              <Link >Contact</Link>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Register</Link>
            </ul>
          </div>
        </nav> */}
    </>
  )
}

export default NavigationBar