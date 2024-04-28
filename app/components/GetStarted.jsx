'use client';

import rocket from '@/public/images/rocket.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimateIn from '@/app/shared/Animate';

export const GetStarted = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="md:px-14 p-4 md:my-10 my-4 max-w-screen-xl mx-5 md:mx-auto rounded 
      bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90%"
      >
        <div className="flex md:flex-row flex-col items-center w-full">
          <AnimateIn from="opactiy-0 scale-90" to="opacity-100 scale-100" delay={500}>
            <div className="md:mx-0 mx-auto w-1/3 mt-12">
              <Image
                className="animate-[bounce_4s_infinite_400ms]"
                src={rocket}
              />
            </div>
          </AnimateIn>

          <div className="flex flex-col items-start">
            <AnimateIn
              as="h1"
              from="opacity-0 translate-y-32"
              to="opacity-100 translate-y-0"
              delay={500}
              duration={300}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 0.4, 0.55, 1.4)',
              }}
            >
              <div>
                <h1 className="text-white font-bold md:text-4xl text-2xl">
                  Get Started with <br />
                  Company name today
                </h1>
              </div>
            </AnimateIn>

            <AnimateIn
              as="h2"
              from="opacity-0 scale-0"
              to="opacity-100 scale-100"
              delay={800}
              duration={500}
              className="text-lg"
            >
              <div className="space-x-3 flex md:flex-row flex-col items-center mt-5">
                <button className="bg-white p-3 my-3 rounded font-semibold text-md transition duration-300 hover:bg-primary hover:text-white text-[#232B36]">
                  <Link href="/animate">Puchase now</Link>
                </button>
                <button className="p-3 my-3 rounded font-semibold text-md transition duration-300 text-white border">
                  Get Free version
                </button>
                <Link href='/Purchase'>Purchase</Link>
              </div>
            </AnimateIn>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
