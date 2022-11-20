import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/wigar-wijaya-05927316b/' target="_blank" rel='noreferrer'><FaLinkedinIn/></a>
        <a href='https://github.com/wigarwijaya' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://twitter.com/wigarwijaya' target="_blank" rel='noreferrer'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocial