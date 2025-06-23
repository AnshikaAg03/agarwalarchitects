import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='bg-orange-100 w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>

        {/* Left Side - Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.h1
            variants={slideUpVariants}
            className='text-gray-800 text-2xl'
          >
            CONTACT US
          </motion.h1>

          <motion.h1
            variants={slideUpVariants}
            className='text-gray-800 uppercase text-[40px] font-bold'
          >
            REACH US FOR ANY QUERY
          </motion.h1>

          <div className='w-[120px] h-[6px] bg-gray-700'></div>

          {/* Address & Contact Info */}
          <motion.p variants={slideUpVariants} className='text-gray-800 text-lg'>
            📍 A-Architects Chappar Wala Pull Rd, opposite to Sudarshan hotel,
             Jayendraganj, Shinde Ki Chhawani, Gwalior, Madhya Pradesh 474001
          </motion.p>

          <motion.p variants={slideUpVariants} className='text-gray-800 text-lg'>
            📞 +91 8269790288
          </motion.p>

          {/* Instagram Handle */}
          <motion.a
            variants={slideUpVariants}
            href="https://instagram.com/aarchitects28"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 text-gray-800 text-lg hover:text-pink-600 transition-all'
          >
            <FaInstagram className='text-2xl' />
            Instagram
          </motion.a>
        </motion.div>

        {/* Right Side - Form */}
        <form
          action="https://formsubmit.co/tanvia28@gmail.com"
          method="POST"
          className='flex flex-col justify-center items-start gap-4 w-full'
        >
          <input
            type="text"
            name="name"
            placeholder='Enter Fullname'
            className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
          />
          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
          />
          <input
            type="number"
            name="phone"
            placeholder='Enter Contact Number'
            className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
          />
          <textarea
            name="message"
            placeholder='Your Message'
            rows="4"
            className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className='bg-gray-800 hover:bg-black hover:text-white px-10 py-4 text-white font-bold rounded-lg w-full'
          >
            SUBMIT
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
