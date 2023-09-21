import { Title } from './Common/Title';
import data from '@/data';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

export const About = () => {
  const linkStyle = {
    textDecoration: "underline",
  };
  return (
    <div
      className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0"
      id="about"
    >
      <Title title="About me" />

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <div className="mt-10 text-1xl text-textDark md:w-1/2">
          <div style={{margin:10}}>
            <h1 className='text-white' style={{marginBottom:10}}>Asst Prof. Na ZHAO</h1>
            I am currently an Assistant Professor in the Information Systems Technology and Design (ISTD) Pillar 
          at <a href='https://www.sutd.edu.sg/' className='text-white'> Singapore University of Technology and Design  (SUTD)</a> .
          Prior to joining SUTD, I was a Research Fellow in Computer Vision and Robot Perception Lab, 
          Department of Computer Science, 
          <a href='http://www.nus.edu.sg/' className='text-white'>National University of Singapore (NUS)</a>. 
          I recieved my Ph.D. in Computer Science from NUS in March 2021, 
          supervised by <a href='https://www.chuatatseng.com/' className='text-white'>Professor Tat-Seng Chua</a>.
          </div>
          <div style={{margin:10}}>
          I am heading <span className='text-white'>Intelligent Machine Perception Lab (IMPL)</span> at SUTD, 
          with a primary focus on, but not limited to: 
          (1)  <span className='text-white'> Computer Vision</span>: 
          3D computer vision, 
          (3D) scene understanding such as object detection and semantic segmentation. 
            (2)  <span className='text-white'> Machine Learning</span>: 
          data-efficient learning, 
          out-of-distribution learning, 
          multi-modal learning, 
          obust learning, 
          continual learning.
          </div>
          <p className='text-white'>
            Links: [<a href='https://github.com/Na-Z' className='p-1' style={linkStyle}>Github</a>] 
            [<a href='https://scholar.google.com/citations?user=KOL2dMwAAAAJ&hl=en&oi=ao' className='p-1' style={linkStyle}>Google Scholar</a>]
            [<a href='mailto:na_zhao@sutd.edu.sg' className='p-1' style={linkStyle}>Mail</a>]
          </p>
        </div>
        <Image
          alt='data.username'
          className="object-contain relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon"
          height={300}
          src={data.image}
          width={300}
        />
      </div>
    </div>
  );
};
