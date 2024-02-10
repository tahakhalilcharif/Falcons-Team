import React from 'react'
import './header.css'
import logo from './LOGO.svg'
const Header = () => {
  return (
    <header className='header'>
       <div className="logo-container">
        <img src={logo}  alt="logo" className="logo" width="100" height="40"/>
      </div>
    </header>
  )
}


export default Header
