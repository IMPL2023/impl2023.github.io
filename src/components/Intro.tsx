import data from '@/data';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

export const Intro = () => {
  return (
    <motion.section
      animate={{ y: 0 }}
      className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl p-5 md:p-8"
      id="intro"
      initial={{ y: 40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          alt="SUTD campus background"
          className="scale-105 object-cover blur-md"
          fill
          priority
          src={data.school}
        />
        <div className="absolute inset-0 bg-bgblue/45" />
      </div>

      <div className="flex min-h-[560px] items-center px-8 py-10 md:px-10">
        <div className="max-w-4xl text-white">
          <p className="text-2xl font-fira text-white/90">Welcome to</p>
          <h1 className="mt-2 text-5xl font-extrabold leading-tight md:text-7xl">
            Intelligent Machine
            <br />
            Perception Lab
          </h1>
          <h2 className="mt-4 text-4xl text-white/90 md:text-5xl">
            at Singapore University of Technology and Design
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">{data.intro}</p>
          <p className="text-lg leading-8 text-white/90">{data.intro2}</p>
          <p className="text-lg leading-8 text-white/90">{data.intro3}</p>
          <p className="text-lg leading-8 text-white/90">{data.intro4}</p>
        </div>
      </div>
    </motion.section>
  );
};
