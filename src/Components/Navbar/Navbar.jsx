import React, { useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css'


const Navbar = () => {

  const menuRef = useRef();

  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  const openMenu = () => {
    menuRef.current.style.right = '0px'
  }
  const scrollToWithOffset = (id, offset) => {
    const element = document.getElementById(id);
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  };
  return (
    <div className='navbar'>
      <img src="./Logo.png" alt="" />
      <i className="ri-menu-fill menu-open" onClick={openMenu}></i>
      <ul ref={menuRef}>
      <i className="ri-close-large-line menu-close" onClick={closeMenu}></i>
        <li> <Link smooth to='#home' scroll={el => scrollToWithOffset('home', -100)} >Home </Link></li>
        <li> <Link smooth to='#about' scroll={el => scrollToWithOffset('about', -100)}  >About Us </Link></li>
        <li> <Link smooth to='#choose' scroll={el => scrollToWithOffset('choose', -100)} >Why Choose Us</Link></li>
        <li> <Link smooth to='#contact' scroll={el => scrollToWithOffset('contact', -100)} >Contact Us </Link></li>
      </ul>
   </div>
  )
}
export default Navbar
