import React from 'react'
import './Nav.css'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail, BiHomeAlt, BiUser, BiBookAlt } from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href='#header'><BiHomeAlt/></a>
      <a href='#about'><BiUser/></a>
      <a href='#experience'><BiBookAlt/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav