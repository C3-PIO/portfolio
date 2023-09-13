import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/chadpiotrovsky/' target='_blank'><BsLinkedin/></a>
        <a href='https://www.github.com/C3-PIO' target='_blank'><BsGithub/></a>
        </div>
  )
}

export default HeaderSocials