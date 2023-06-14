import React from 'react'
import './Header.css'
import Buttons from './Buttons'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Joshua Colyn</h1>
        <h5 className='text-light'>Software Developer</h5>
        <Buttons />
        <HeaderSocials />

        <div className='ProfilePicture'>
          <img src={profile} />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header