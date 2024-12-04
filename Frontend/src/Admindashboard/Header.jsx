import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'


function Header() {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' />
      </div>
      <nav className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-item'><a href='#'>Home</a></li>
          <li className='navbar-item'><a href='#'>About</a></li>
          <li className='navbar-item'><a href='#'>Services</a></li>
          <li className='navbar-item'><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <div className='header-right'>
        <BsSearch className='icon' />
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  )
}

export default Header
