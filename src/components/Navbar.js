import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${isScrolled ? `${props.bg} bg-opacity-70 backdrop-filter backdrop-blur-lg duration-1000` : `${props.border} ${props.before}`}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <Link to="/"><div className={`font-bold text-zinc-700 text-xl whitespace-nowrap `}>Yoga Retreat</div></Link>
        <div className="flex items-center">
          <button className="text-zinc-700 font-medium md:hidden" onClick={toggleMenu}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className={`hidden md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Home</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">About Us</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Treatments</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Programs</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Benefits</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Billing</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto py-2 px-4 bg-custom-gray rounded-md shadow-lg md:hidden">
          <ul className="space-y-2">
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Home</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">About Us</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Treatments</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Programs</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Benefits</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Billing</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;