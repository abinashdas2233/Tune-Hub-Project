import React from 'react'
import { Link } from 'react-router-dom'
import "./Adminnav.css"

function Adminnavbar() {
  return (
    <div className='maincon'>
        
        <div className="containan">
        <div className="ima"><img src='logo.png'alt='logo' width={100} height={80}></img></div>
            <ul>
            <Link to='/ah'><li>Home</li></Link>
               <Link to='/ass'> <li>Add-songs</li></Link>
               <Link to='/vss'><li>Viewsongs</li></Link>
               <Link to='/vcd'><li>Viewcustomer -Details</li></Link>
               <Link to='/fcc'><li>Feedbacks</li></Link>
               <Link to='/login'> <li>Logout</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Adminnavbar