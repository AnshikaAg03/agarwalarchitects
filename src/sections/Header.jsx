import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItem = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Projects', path: 'projects' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav className='w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
      {/* Logo */}
      <h1 className='text-orange-100 italic md:text-4xl text-3xl font-bold font-rubrik'>
        A-<span className='text-orange-100 italic'>ARCHITECTS</span>
      </h1>

      {/* Desktop Menu */}
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItem.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='text-orange-100 uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-orange-100 hover:text-black text-[15px]'
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Reach Us Button */}
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className='bg-green-100 hover:bg-green-700 hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'
      >
        REACH US
      </Link>

      {/* Mobile Menu Toggle */}
      <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className='text-orange-100 text-3xl cursor-pointer' />
        ) : (
          <FaBars className='text-orange-100 text-3xl cursor-pointer' />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-orange-100 p-4 absolute top-[72px] left-0 z-50`}
        onClick={closeMenu}
      >
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
              className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center'
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
