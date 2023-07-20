import React from 'react'
import logo from '../images/Logo.png'

export const Header = () => {
  return (
    <div>
        <nav>
            <img src={logo} alt='logo'></img>
            <h3 className='title'>React Course - Project 3</h3>
        </nav>
    </div>
  )
}
