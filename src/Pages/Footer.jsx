import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-sm'>&copy; {new Date().getFullYear()} SaveMyMoney. All rights reserved.</p>
        <div className='flex space-x-4'>
          <a href='#' className='hover:text-blue-400 transition duration-200'>
            <FaFacebookF className='text-xl' />
          </a>
          <a href='#' className='hover:text-blue-400 transition duration-200'>
            <FaTwitter className='text-xl' />
          </a>
          <a href='#' className='hover:text-blue-400 transition duration-200'>
            <FaInstagram className='text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
