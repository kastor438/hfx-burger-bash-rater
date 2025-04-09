import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Header.css';
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('active');
    }
  };

  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <NavLink to="/" id="main-heading" className="headerTitle">HFX Burger Bash Rater</NavLink>
        <button className="menuIcon" onClick={toggleMenu}>
            <FaBars />
        </button>
        <nav ref={navRef} className="mt-2">
          <button className="closeButton" onClick={toggleMenu}>X</button>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="headerNavLink">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="headerNavLink">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header