import React from 'react'
import { Link } from 'react-router-dom'
import'./Index.css'

const Index = () => {
  return (
    <div className='container'>
      <div className="uk">
      <div><img src='logo.png'alt='logo' width={100} height={80}></img>
      </div>

<div className='up'>
<a  ><Link to='/register'> Click here to register</Link></a>
  

<Link to='/login' >Click here to Login</Link>
</div>

      </div>
   
      

    </div>
   
  )
}

export default Index