'use client';
import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';

export const Banner = ({ banner, heading, subheading, bt1, btn2 }) => {
  return (
    <div className="gradiantBg rounded-md rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        {/* Banner img */}
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image src={banner} alt="banner" className="lg:h-[386px]" />
        </motion.div>
        {/* Banner content */}
        <motion.div
          className="md:w-3/5"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            <ReactTyped
              strings={['Develop your skills without diligence']}
              typeSpeed={130}
              backSpeed={90}
              loop
            />
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8">{subheading}</p>
          <div className="space-x-5 space-y-4">
            <button className="btnPrimary">{bt1}</button>
            <button className="btnPrimary">{btn2}</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
