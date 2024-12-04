import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
<link rel="stylesheet" href="style.css"></link>

function Sidebar() {
  const navigate = useNavigate()
  return (
<div>
  <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon' />SHOP
        </div>
        <span className='icon close-icon'>x</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsGrid1X2Fill className='icon' />Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a onClick={()=> navigate('/student')}>
            <BsFillArchiveFill className='icon' />Students
            
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsFillGrid3X2GapFill className='icon' />Routes
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsPeopleFill className='icon' />Fee
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsListCheck className='icon' />Rules
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsMenuButtonWideFill className='icon' />Settings
          </a>
        </li>
      </ul>
    </aside>
</div>
  )
}

export default Sidebar
