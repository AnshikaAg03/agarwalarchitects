import React from 'react'
import {FaCopyright} from 'react-icons/fa6'
import {Link} from 'react-scroll'
import {FaArrowUp} from 'react-icons/fa'

const Footer = () => {
 return (
  <>
    <div className='bg-black text-white flex justify-center items-center gap-2 p-5'>
      <FaCopyright className='fill-green-100 lg:size-5 size-8' />
      <p className='text-lg text-center'>
        Copyright 2025, A-Architects, All Rights Reserved
      </p>
    </div>

    <div
      id='icon-box'
      className='bg-green-100 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6 z-50'
    >
      <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='size-6' />
      </Link>
    </div>
  </>
);

}

export default Footer
