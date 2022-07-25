import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
   <>
   <div className='navbar'>
    <div class='container-navbar '>
      <a href='/'> <img id='navbarimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBF-1Rgjubu31BiFykbTVv3mB_X3cqhlHYA&usqp=CAU' alt='logo'/>
      Calculator  </a>
        <ul>
            <li className='li-nav'><a href='/' >Home</a></li>
            <li className='li-nav'><a href='/'>Contact Us</a></li>
            <li className='li-nav'><a href='/'>Form</a></li>
            <li className='li-nav'><a href='/'>Login</a></li>
        </ul>
    </div>
   </div>
   </>
  )
}
