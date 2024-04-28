'use client';
import React, { useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
import { HiMiniMinus } from "react-icons/hi2";

export const Accordion = ({ id, title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="w-full flex items-center justify-between"
      >
        <span className='md:text-2xl text-lg md:px-6 md:my-3 px-4 font-semibold'>{id} {title}</span>
        {accordionOpen ? <span className='mr-5'><HiMiniMinus /></span> : <span className='mr-5'><BsPlusLg /></span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
            ${
              accordionOpen
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            } `}
      >
        <div className="overflow-hidden text-lg md:px-10 px-7">{answer}</div>
      </div>
    </div>
  );
};
