import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border shadow-lg py-4 w-full  sticky top-0 bg-white'>
      <header>
        <NavLink to={"/"} ><h1 className='text-center font-bold text-3xl uppercase '>Ajaj Blogs</h1></NavLink>
      </header>
    </div>
  )
}

export default Header
