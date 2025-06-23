import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  return (
    <div
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'
      id='about'
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-orange-100 text-2xl'
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants= {slideUpVariants}
          className='text-orange-100 uppercase text-[40px] font-bold'
        >
          Agarwal Architects and Interior Designer
        </motion.h1>
        <div className = 'w-[120px] h-[6px] bg-white'></div>
        <p className = 'text-3xl italic text-orange-100 mt-[60px]'>Where timeless design meets modern vision</p>
      </motion.div>
      <motion.div
        initial = "hidden"
        whileInView="visible"
        variants = {slideUpVariants}
        className = 'lg: w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <p className= 'text-white text-lg text-justify'>We are a Gwalior-based architecture and interior design 
          studio dedicated to delivering innovative, elegant, and practical solutions for homes, offices, and commercial spaces.
          From concept to completion, we offer comprehensive, end-to-end services , seamlessly managing everything from planning to construction 
          under expert supervision. Whether it’s new builds or thoughtful renovations, we bring craftsmanship, creativity, and a personal touch to every 
          project, ensuring timeless results with meticulous attention to detail.</p>
            <motion.button
                  variants={zoomInVariants}
                  className='bg-orange-100 text-gray hover:bg-white hover:text-grey-500 px-10 py-3 rounded-xl font-bold'
            > 
                 READ MORE
             </motion.button> 
      </motion.div>
    
    </div>
  );
};

export default About;
