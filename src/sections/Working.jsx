import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';

const Working = () => {
  return (
    <div id='working' className='w-full bg-orange-100'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-gray-700 uppercase text-[40px] font-bold text-center'
        >
          STEP BY STEP WORKING
        </motion.h1>

        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-gray-500'
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center gap-5 border-2 border-gray-500 rounded-lg p-6'
            >
              <item.icon className='size-[80px] bg-green-50 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer' />
              <h2 className='text-lg uppercase font-bold text-gray-800 text-center'>
                {item.title}
              </h2>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
