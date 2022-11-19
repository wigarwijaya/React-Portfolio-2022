import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" rel='noreferrer'><FaLinkedinIn/></a>
        <a href='https://github.com' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://twitter.com' target="_blank" rel='noreferrer'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocial