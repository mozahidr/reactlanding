'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';

import f2 from '@/public/images/about.png';
import ab2 from '@/public/images/ab2.svg';

export const useIsVisible = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
};

export const About = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  //  const ref3 = useRef();
  //  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <div
        className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10"
        id="about"
      >
        <div
          ref={ref1}
          className={`flex flex-col md:flex-row items-center justify-between gap-8 transition-opacity ease-in duration-700
        ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}
        >
          <motion.div
            className="md:w-1/2"
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image src={f2} alt="about" />
          </motion.div>
          {/* About content */}
          <motion.div
            className="md:w-2/5"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">
              We have been improving out product <span>for many years.</span>
            </h2>
            <p className="text-tartiary text-lg mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              fugit dignissimos consectetur beatae! Error molestiae explicabo
              repellat animi, illum optio quisquam asperiores sit. Rerum commodi
              provident repudiandae sapiente dignissimos voluptates!
            </p>
            <button className="btnPrimary">Get started</button>
          </motion.div>
        </div>
        {/* second content */}
        <div
          ref={ref2}
          className={`flex flex-col md:flex-row-reverse items-center justify-between gap-8 transition-opacity ease-in duration-700
        ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}
        >
          <motion.div
            className="md:w-1/2"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Image src={ab2} alt="about" />
          </motion.div>
          {/* About content */}
          <div className="md:w-1/2">
            <h2 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">
              You can practic at any time <span>convinent for you.</span>
            </h2>
            <p className="text-tartiary text-lg mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              fugit dignissimos consectetur beatae! Error molestiae explicabo
              repellat animi, illum optio quisquam asperiores sit. Rerum commodi
              provident repudiandae sapiente dignissimos voluptates!
            </p>
            <button className="btnPrimary">Get started</button>
          </div>
        </div>
      </div>
    </>
  );
};
