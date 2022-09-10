import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <>
    <h1>Desde auth layout</h1>
    <Outlet/>
    
    </>
  )
}

export default Auth