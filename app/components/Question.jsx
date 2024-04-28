'use client';
import AnimateIn from '@/app/shared/Animate';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variants';

export const Question = () => {
  return (
    <>
      <AnimateIn
        as="h2"
        from="opacity-0 scale-0"
        to="opacity-100 scale-100"
        delay={800}
        duration={500}
        className="text-lg"
      >
        <div className="max-w-[100%] bg-[#FBFBFC] my-10">
          <motion.div
            className="max-w-screen-2xl mx-auto flex flex-col items-center"
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div>
              <h1 className="md:text-2xl text-xl font-bold text-[#232B36] mt-6">
                Still have question?
              </h1>
            </div>
            <div>
              <h3 className="mt-4 md:mx-0 mx-3 text-center mb-5 font-normal text-lg text-[#9CA5AE]">
                Please describe your case to receive the most accurate advice.
              </h3>
            </div>
            <div className="mb-6">
              <button className="p-3 rounded-md text-white bg-[#232B36] hover:bg-primary transition-all duration-300">
                Contact us
              </button>
            </div>
          </motion.div>
        </div>
      </AnimateIn>
    </>
  );
};
