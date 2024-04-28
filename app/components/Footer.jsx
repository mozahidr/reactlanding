'use client';
import Link from 'next/link';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import { top as myimg } from '@/public/images/top.png';

import ScrollToTop from 'react-scroll-to-top';
import { HiChevronDoubleUp } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const yr = new Date();
  return (
    <div className="max-w-[100%] mx-auto bg-[#010851] text-white">
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto">
        <div className="my-12 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-8">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center space-x-3 text-primary"
            >
              <Image
                className="rounded-md w-14 h-14 inline-block items-center"
                src={logo}
                alt="logo"
              />
              <span className="text-white text-2xl">ABC</span>
            </Link>
            <p className="md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              facilis voluptatibus pariatur ratione consectetur nam asperiores.
            </p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
              />
              <input
                type="submit"
                value="Subscribe"
                className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
              />
            </div>
          </div>

          {/* Footer items */}
          <div className='md:w-1/2 flex flex-col md:flex-row justify-between md:items-start items-center text-center gap-8'>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Platform</h4>
              <ul className="leading-8 text-sm">
                <Link href="/">
                  <li className="block hover:text-gray-300">Overview</li>
                </Link>
                <Link href="/">
                  <li className="block hover:text-gray-300">Features</li>
                </Link>
                <Link href="/">
                  <li className="block hover:text-gray-300">About</li>
                </Link>
                <Link href="/">
                  <li className="block hover:text-gray-300">Pricing</li>
                </Link>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Help</h4>
              <ul className="leading-8 text-sm">
                <Link href="/">
                  <li className="block hover:text-gray-300">
                    How does it works?
                  </li>
                </Link>
                <Link href="/">
                  <li className="block hover:text-gray-300">
                    Where to as questions?
                  </li>
                </Link>
                <Link href="/">
                  <li className="block hover:text-gray-300">How to play?</li>
                </Link>
                <Link href="/">
                  <li className="block hover:text-gray-300">
                    What is needed for this?
                  </li>
                </Link>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Contacts</h4>
              <ul className="leading-8 text-sm">
                <p className="hover:text-gray-300">Company Name</p>
                <p className="hover:text-gray-300">info@compayname.com.au</p>
                <p className="hover:text-gray-300">Bankstown, NSW - 22200</p>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div className='flex flex-col sm:flex-row gap-8 justify-between sm:items-center my-8'>
          <p>ABC &copy; {yr.getFullYear()} All rights reserved.</p>
          <div className='flex items-center space-x-4'>
            <FaFacebook size={28} className='hover:-translate-y-3 cursor-pointer transition-all duration-300' />
            <FaInstagram size={28} className='hover:-translate-y-3 cursor-pointer transition-all duration-300' />
            <FaTwitter size={28} className='hover:-translate-y-3 cursor-pointer transition-all duration-300' />
            <FaLinkedin size={28} className='hover:-translate-y-3 cursor-pointer transition-all duration-300' />
          </div>
        </div>
      </div>
      <ScrollToTop className='text-sm' smooth component={<p style={{color: 'blue'}}>Top</p>} />
    </div>
    
  );
};
