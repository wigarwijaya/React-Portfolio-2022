import React, { useState } from 'react'
import './Nav.css'
import { BiMessageSquareDetail, BiHomeAlt, BiUser, BiBookAlt, BiCodeAlt } from 'react-icons/bi'

const Nav = () => {
  const [isActive, setIsActive] = useState('#header');


  return (
    <nav>
      <a href='#header' onClick={() => setIsActive('#header')} className={isActive === "#header" ? 'active' : undefined}><BiHomeAlt/></a>
      <a href='#about' onClick={() => setIsActive('#about')} className={isActive === "#about" ? 'active' : undefined}><BiUser/></a>
      <a href='#experience' onClick={() => setIsActive('#experience')} className={isActive === "#experience" ? 'active' : undefined}><BiBookAlt/></a>
      <a href='#portfolio' onClick={() => setIsActive('#portfolio')} className={isActive === "#portfolio" ? 'active' : undefined}><BiCodeAlt/></a>
      <a href='#contact' onClick={() => setIsActive('#contact')} className={isActive === "#contact" ? 'active' : undefined}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav