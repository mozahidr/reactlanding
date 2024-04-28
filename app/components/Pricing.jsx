'use client';

import { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: 'Starter',
      monthlyPrice: 19,
      yearlyPrice: 199,
      description: 'Lorem ipsum dolor sit amet consectetur',
      icon: <IoCheckmark />,
    },
    {
      name: 'Advanced',
      monthlyPrice: 39,
      yearlyPrice: 399,
      description: 'Lorem ipsum dolor sit amet consectetur',
      icon: <IoCheckmark />,
    },
    {
      name: 'Premium',
      monthlyPrice: 59,
      yearlyPrice: 599,
      description: 'Lorem ipsum dolor sit amet consectetur',
      icon: <IoCheckmark />,
    },
  ];
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          nulla beatae doloribus ipsam officia quo non ducimus laborum sequi
          labore?
        </p>
        {/* Toggle Pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Montly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? 'bg-primary ml-8' : 'bg-gray-500'
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      {/* Pricing card */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="py-10 md:px-6 px-4 rounded-lg shadow-md border border-dashed border-[rgba(145, 158, 171, 0.2)] 
            hover:-translate-y-4 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tartiary text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? 'year' : 'month'}
              </span>{' '}
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-3 items-center">
                {pkg.icon}Video of lessons
              </li>
              <li className="flex gap-3 items-center">
                {pkg.icon}Homework check
              </li>
              <li className="flex gap-3 items-center">
                {pkg.icon}Additional practical task
              </li>
              <li className="flex gap-3 items-center">
                {pkg.icon}Monthly conferences
              </li>
              <li className="flex gap-3 items-center">
                {pkg.icon}Personal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get Started</button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
