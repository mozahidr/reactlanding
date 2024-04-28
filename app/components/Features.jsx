'use client';
import Image from 'next/image';
import f1 from '@/public/images/feature1.svg';
import f3 from '@/public/images/f3.svg';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';

export const Features = () => {
  return (
    <>
      <div className="mt-20 mb-5 md:px-14 px-4 max-w-screen-2xl mx-auto" id='features'>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <motion.div 
          className="lg:w-1/4"
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-taritary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            possimus blanditiis vitae fuga pariatur omnis non aut qui et impedit
            sint, quo, cum harum fugiat quisquam, cupiditate ab at laborum?
          </p>
        </motion.div>
        {/* Featured cards */}
        <motion.div 
          className="w-full lg:w-3/4"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
          <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-md h-96 shadow-2xl p-8 items-center 
          hover:-translate-y-4 transition-all duration-300 flex justify-center cursor-pointer">
            <div>
              <Image src={f1} alt="fimage" />
              <h5 className="md:text-2xl text-lg font-semibold text-primary px-5 text-center md:mt-5 mt-0">
                Convenient study schedule
              </h5>
            </div>
          </div>
          <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-md h-96 shadow-2xl p-8 items-center 
          hover:-translate-y-4 transition-all duration-300 flex justify-center md:mt-16 mt-0 md:mb-2 mb-4 cursor-pointer">
            <div>
              <Image src={f1} alt="fimage" />
              <h5 className="md:text-2xl text-xl font-semibold text-primary px-5 text-center md:mt-5 mt-0">
                Convenient study schedule
              </h5>
            </div>
          </div>
          <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-md h-96 shadow-2xl p-8 items-center 
          hover:-translate-y-4 transition-all duration-300 flex justify-center cursor-pointer md:mt-0 mt-0 md:mb-0 mb-4">
            <div>
              <Image src={f3} alt="fimage" />
              <h5 className="md:text-2xl text-xl font-semibold text-primary px-5 text-center md:mt-5 mt-0">
                Convenient study schedule
              </h5>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
    
    </>
  );
};
