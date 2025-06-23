import React from 'react';
import heroimg from '../assets/heroimg.png';
import backgroundImage from '../assets/homeimg.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div
      id='hero'
      className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] 
     lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row 
     flex-col lg:gap-5 gap-[50px] bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start 
           lg:gap-8 gap-4'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-white-500-text-2xl'
        >
          WE BUILD AND DESIGN YOUR HOME
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className='text-grey uppercase text-[50px] font-bold'
        >
          we will build your dream
        </motion.h1>

        <div className='w-[120px] h-[6px] bg-gray-500'></div>

        <p className='text-grey text-[20px]'>
          Welcome to A-Architects, where architecture meets elegance and interiors inspire living.
          We specialize in crafting innovative spaces that blend functionality with timeless design.
          From modern homes to commercial landmarks, our creative vision transforms every space into
          a masterpiece of form and purpose.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='flex justify-center items-center gap-5'
        >
          {/* Read More → About Section */}
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <motion.button
              variants={zoomInVariants}
              className='bg-gray-700 text-white hover:bg-white hover:text-gray-700 px-10 py-3 rounded-lg font-bold'
            >
              READ MORE
            </motion.button>
          </Link>

          {/* Reach Us → Contact Section */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <motion.button
              variants={zoomInVariants}
              className='border border-gray-500 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-600 border-4 px-10 py-3 rounded-lg font-bold'
            >
              REACH US
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
