import React from 'react'
import { Link } from 'react-router-dom'
import './Customernavbar.css'

function Customernavbar() {
  return (
    <div className='ops'>
      

        <div className="oas">
        <div><img src='logo.png'alt='logo' width={100} height={80}></img>
      </div>
            <ul>
                <Link to='/ds'><li>Home</li></Link>
                <Link to='/cvs'><li>View-Songs</li></Link>
                <Link to='/cps'><li>Feedback</li></Link>
                <Link to='/login'><li>Logout</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Customernavbar