import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
        <nav className='bg-[#adbbda] py-4 px-4'>
          <div className=' flex justify-between'>
            <div className='text-[35px] font-[600]'>HelpMate</div>
            <ul className=' space-x-4'>
              <Link to="/">Home</Link>
              <Link>About</Link>
              <Link>Contact</Link>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Register</Link>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default NavigationBar