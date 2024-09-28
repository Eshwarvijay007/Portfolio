import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={closeMobileMenu}
      className="nav-link text-white transition-all duration-300 px-4 py-2 rounded-full relative group overflow-hidden"
    >
      <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">{children}</span>
      <span className="absolute inset-0 bg-sky-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  );

  return (
    <nav className="fixed w-full z-10 top-6 left-0 flex justify-center" style={{ cursor: 'default' }}>
      <div className="w-11/12 max-w-6xl backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 rounded-2xl px-8 py-3 shadow-lg">
        <div className="mx-auto text-center flex justify-between items-center">
          
          <div className="hidden sm:flex space-x-1 items-center text-sm">
            <NavLink href='/'>Home</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>
          <div className="text-3xl sm:text-2xl font-extrabold">
            <a href="/" className="text-white hover:text-yellow-300 transition-colors duration-300">Eshwar Vijay</a>
          </div>
          <div className="hidden sm:flex space-x-1 items-center text-sm">
            <NavLink href="#Projects">Projects</NavLink>
            <NavLink href="#Experience">Journey</NavLink>
            <NavLink href="#Contact">Contact</NavLink>
          </div>

          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-xl focus:outline-none text-white">
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu (unchanged) */}
      <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
        <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none text-white hover:text-yellow-300">
          ✕
        </button>
        <ul className="font-medium text-2xl space-y-4">
          <li><Link to='/' onClick={closeMobileMenu} className="text-white hover:text-yellow-300 transition-colors duration-300">Home</Link></li>
          <li><Link to='/about' onClick={closeMobileMenu} className="text-white hover:text-yellow-300 transition-colors duration-300">About</Link></li>
          <li><Link to='/projects' onClick={closeMobileMenu} className="text-white hover:text-yellow-300 transition-colors duration-300">Projects</Link></li>
          <li><Link to='/experience' onClick={closeMobileMenu} className="text-white hover:text-yellow-300 transition-colors duration-300">Journey</Link></li>
          <li><Link to='/contact' onClick={closeMobileMenu} className="text-white hover:text-yellow-300 transition-colors duration-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
