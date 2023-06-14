import React from 'react'
import './Header.css'
import Buttons from './Buttons'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Joshua Colyn</h1>
        <h5 className='text-light'>Software Developer</h5>
        <Buttons />

        <div className='me'>
        </div>

      </div>
    </header>
  )
}

export default Header