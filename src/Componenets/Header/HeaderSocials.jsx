import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com' target='_blank'><FaGithub /></a>
        <a href='mailto:business.joshcolyn@gmail.com' target='_blank'><HiOutlineMail /></a>
    </div>
  )
}

export default HeaderSocials