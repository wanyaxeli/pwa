import React from 'react'
import banner from '../assets/bluiding.jpg'
import Header from './Header'
export default function Banner() {
  return (
    <div className='container-fluid position-relative bg-success w-100 px-0'style={{height:630,}}  >
        <img className='w-100 h-100 object-fit-cover' src={banner}/>
        <div style={{backgroundColor:'#429fef'}} className='position-absolute top-0 opacity-75  w-100 h-100'>
          <div className='h-100 w-75 mx-auto '>
          <Header/>
           <div style={{color:'#fff'}} className='h-75 m-auto  mt-5 w-75 d-flex flex-column justify-content-center align-items-center '>
            <h2 className='text-capitalize'>find a Bussiness room</h2>
            <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button className='Contactbtn'>contact us</button>
           </div>
          </div>
        </div>
    </div>
  )
}
