import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-slate-500 z-50 text-white flex justify-between px-5 flex-wrap h-12 items-center fixed w-full top-0">
  <div className='block'>
    <h2 className='font-serif font-medium'>Tailwind-css</h2>
  </div>
  <div className='right'>
    <ul className='flex space-x-6 px-5 '>
        <NavLink to="/">
        <li className='hover:bg-red-600 px-4 py-2 rounded-md cursor-pointer'>Home</li>
        </NavLink>
        <NavLink to="/contact">
        <li className='hover:bg-red-600 px-4 py-2 rounded-md cursor-pointer'>Contact us</li>
        </NavLink>
        <NavLink to="/about">
        <li className='hover:bg-red-600 px-4 py-2 rounded-md cursor-pointer'>About</li>
        </NavLink>
        <NavLink to="/policy">
        <li className='hover:bg-red-600 px-4 py-2 rounded-md cursor-pointer'>Our Servies</li>
        </NavLink>
    </ul>
  </div>
</div>
  )
}

export default Header