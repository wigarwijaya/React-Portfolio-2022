import React from 'react'
import { FaLinkedinIn, FaGithub, FaDribbble } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" rel='noreferrer'><FaLinkedinIn/></a>
        <a href='https://github.com' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://dribble.com' target="_blank" rel='noreferrer'><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocial