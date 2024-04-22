import React from 'react'
import { Link,useLocation } from 'react-router-dom'
export default function Header() {
    const location =useLocation()
    const path = location.pathname.split('/')
    console.log(path[1])
  return (
    <div className='w-100 d-flex flex-row text-white justify-content-between align-items-center' style={{height:50}}>
        <div>
            <p>Logo</p>
        </div>
        <div>
            <ul className='nav d-flex  flex-row justify-content-between'>
                <li className={`${path[1] === ''?'active':''}`}><Link to='/'>Home</Link></li>
                <li className={`${path[1] === 'property'?'active':''}`}><Link to='/property'>Property</Link></li>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
        </div>
       <div className='loginBtnWrapper'> 
       <span><i className="fa fa-user" aria-hidden="true"></i> Login</span>
       <span><i className="fa fa-search" aria-hidden="true"></i></span>
       </div>
    </div>
  )
}
