import React from 'react';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.webp';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-orange-100 uppercase text-[40px] font-bold text-center'
        >
          OUR BEST PROJECTS
        </motion.h1>

        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-orange-100'
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full m-auto grid lg:grid-cols-4 grid-cols-1 gap-4'
        >
          {[project1, project2, project3, project4, project5, project6, project7, project8].map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`project-${idx + 1}`}
              className='h-[250px] w-full object-cover rounded-lg shadow-md'
              variants={zoomInVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
