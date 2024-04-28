'use client';

import logo from '@/public/images/logo.png';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { GrLanguage } from 'react-icons/gr';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isMenuOpen);
  };
  const navItems = [
    {
      link: 'Overview',
      path: 'home',
    },
    {
      link: 'Features',
      path: 'features',
    },
    {
      link: 'About',
      path: 'about',
    },
    {
      link: 'Pricing',
      path: 'pricing',
    },
    {
      link: 'Contact',
      path: 'contact',
    },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-[100%] mx-auto text-primary fixed opacity-90 top-0 left-0 right-0 border-b-[1px] border-[#ccc]">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center space-x-14">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center space-x-3 text-primary"
            >
              <Image
                className="rounded-md w-14 h-14 inline-block items-center"
                src={logo}
                alt="logo"
              />
              <span>ABC</span>
            </Link>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map((item) => (
                <Link
                  activeClass="active"
                  spy={true}
                  offset={-100}
                  hashSpy={true}
                  duration={500}
                  delay={1000}
                  smooth={true}
                  key={item.link}
                  to={item.path}
                  className="block cursor-pointer hover:text-gray-500"
                >
                  {item.link}
                </Link>
              ))}
            </ul>
          </div>
          {/* Language and Sign up*/}
          <div className="space-x-12 hidden md:flex items-center">
            <Link href="/" className="hidden lg:flex items-center">
              <GrLanguage className="mr-2" />
              <span className="hover:text-secondary">Language</span>
            </Link>
            <button className="bg-secondary px-4 py-2 rounded transition-all duration-300 hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>
          {/* Menu button only display on mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <IoCloseOutline className="w-6 h-6 text-primary" />
              ) : (
                <HiOutlineMenuAlt1 className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* nav for mobile  */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${
          isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
        }`}
      >
        {navItems.map((item) => (
          <Link
            activeClass="active"
            spy={true}
            offset={-80}
            hashSpy={true}
            duration={500}
            delay={1000}
            smooth={true}
            key={item.link}
            to={item.path}
            className="block cursor-pointer text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            {item.link}
          </Link>
        ))}
      </div>
    </>
  );
};
