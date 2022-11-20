import React from 'react'
import './Footer.css'
import wigar from '../../assets/wgr-logo.png'

const Footer = () => {
  return (
    <footer>
      <a href='#header'><img className='footer__logo' src={wigar} alt="wigar logo"/></a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#technologies'>Technologies</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__copyright'>
        <small>{`R. Wigar Wijaya W. © ${new Date().getFullYear()}`}</small>
      </div>
    </footer>
  )
}

export default Footer