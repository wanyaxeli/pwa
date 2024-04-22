import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Property from './Property'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/property' element={<Property/>}/>  
    </Routes>
  )
}
