import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { clients } from '../export';

const Testimonials = () => {
  const client = clients[0]; // Show only one client

  return (
    <div id='clients' className='w-full text-white'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='w-full max-w-[1440px] px-6 py-[60px] mx-auto flex flex-col items-center gap-[30px]'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-orange-100 uppercase text-[40px] font-bold text-center'
        >
          MEET THE FOUNDER
        </motion.h1>

        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-orange-100'
        ></motion.div>

        <motion.div
          variants={zoomInVariants}
          className='w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 border border-white p-8 rounded-lg'
        >
          {/* Image Section */}
          <img
            src={client.image}
            alt='client'
            className='w-[180px] h-[180px] object-cover rounded-full border-4 border-orange-100'
          />

          {/* Text Section */}
          <div className='flex-1 text-lg leading-relaxed text-white'>
            <p>
              Tanvi is a passionate and accomplished architect with over 5 years of hands-on experience in the field. Having successfully completed 50+ diverse projects across residential, commercial, and interior domains, she brings both creativity and precision to her work. She honed her skills through extensive training at leading architectural firms in Ahmedabad and Hyderabad, where she gained valuable exposure to innovative design methodologies and on-ground execution. Her dedication to blending aesthetic vision with functional design continues to shape meaningful spaces for clients with care and excellence.
            </p>

            <h2 className='text-[27px] font-bold uppercase text-orange-100 mt-6'>
              {client.name}
            </h2>
            <p className='text-[20px] text-orange-100'>{client.post}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
