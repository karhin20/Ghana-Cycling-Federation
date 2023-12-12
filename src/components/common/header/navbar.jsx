import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import hamburger1 from '../images/hamburger1.png';
import logo from '../images/logo.png';
import './navbar.css';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <head />
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="container1">
          <div className="logo">
           <NavLink to="/">
             <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <div className="hamburger">
               
                  <img src={hamburger1} alt="Hamburger" />
             
            </div>
          </div>
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Events</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Cycling in Ghana</NavLink>
              </li>
              <li>
                <NavLink to="/about">Team Ghana</NavLink>
              </li>
              <li>
                <NavLink to="/partners">Partners</NavLink>
              </li>
              <li>
                <NavLink to="/sponsorus">Sponsor US</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;