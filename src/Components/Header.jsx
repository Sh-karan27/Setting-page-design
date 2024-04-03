import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo.png';
import { TbCircleLetterJ } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
const Header = () => {
  const [smallMenu, setSmallMenu] = useState(false);
  const toggleMenu = () => {
    setSmallMenu(!smallMenu);
  };
  return (
    <section className='w-full h-full flex items-center justify-center  border-b'>
      <div className='  max-w-screen-lg lg:w-3/4 md:w-full flex items-center justify-between   max-sm:w-full max-sm:py-4'>
        <div className='  flex  justify-center items-center  '>
          <img
            src={logo}
            alt='logo'
            className=' w-10 flex justify-start items-start '
          />
        </div>
        <div className=' px-5 py-5  w-full  max-sm:hidden  '>
          <ul className=' flex items-center justify-end gap-20 text-gray-400 font-semibold max-sm:gap-0'>
            <li>Home</li>
            <li>Integration</li>
            <li>Help</li>
            <li className='flex items-center justify-center gap-5'>
              {' '}
              <span className='bg-gray-300 px-4 text-black border-gray-400 border-2 py-2 rounded-full'>
                J
              </span>{' '}
              Account
              <IoIosArrowDown className='text-sm text-gray-500' />
            </li>
          </ul>
        </div>
        <div className='relative'>
          {smallMenu ? (
            <RxCross1
              className='max-sm:flex text-3xl mr-4 text-blue-600 cursor-pointer transform transition duration-500 ease-in-out'
              onClick={toggleMenu}
            />
          ) : (
            <GiHamburgerMenu
              className='hidden max-sm:flex text-3xl mr-4 text-blue-600 cursor-pointer transform transition duration-500 ease-in-out'
              onClick={toggleMenu}
            />
          )}
        </div>
        {smallMenu && (
          <div
            className='z-50 absolute top-[15%]  left-0   w-full   flex items-center justify-center transition-transform duration-500 ease-in-out'
            style={{ transform: 'translateY(-100%)' }}>
            <ul className=' flex px-5 py-2  items-center justify-center gap-10 text-white font-semibold  bg-[#0076b6e1] rounded-sm   '>
              <li>Home</li>
              <li>Integration</li>
              <li>Help</li>
              <li>Account</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
