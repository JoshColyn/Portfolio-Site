import React from 'react'
import Resume from '../../Assets/resume.pdf'

const Buttons = () => {
  return (
    <div className='Buttons'>
        <a href={Resume} download>Download CV</a>
        <a href='#contact'>Contact</a>
    </div>
  )
}

export default Buttons