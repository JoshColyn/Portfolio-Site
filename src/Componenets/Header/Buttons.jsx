import React from 'react'
import Resume from '../../Assets/resume.pdf'

const Buttons = () => {
  return (
    <div className='Buttons'>
        <a href={Resume} download className='btn'>Download CV</a>
        <a href='#contact' className=' btn btn-primary'>Contact</a>
    </div>
  )
}

export default Buttons