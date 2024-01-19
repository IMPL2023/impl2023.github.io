import Layout from '@/Layout/Main.Layout';
import { About, Blog, Contact, Intro, Projects,News,Members } from '@/components';
import data from '@/data';
import { FunType } from '@/types';

import { GetStaticProps } from 'next';
import { FC } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from "@/components/carousel.component";
interface FunProps {
  fun: FunType;
}

interface Slide {
  imageUrl: string;
  alt: string;
  caption: string;
}

interface SlideComponentProps {
  slides: Slide[];
}
interface SlideComponentState {
  currentIndex: number;
}

const slidesData = [
  {
    imageUrl: 'slide1.jpg',
    alt: 'Slide 1',
    caption: 'Welcome to Slide 1',
  },
  {
    imageUrl: 'slide2.jpg',
    alt: 'Slide 2',
    caption: 'This is Slide 2',
  },
  {
    imageUrl: 'slide3.jpg',
    alt: 'Slide 3',
    caption: 'And Here Comes Slide 3',
  },
];



const Fun: FC<FunProps> = ({fun}) => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const slidesData = [
    {
      imageUrl: images[0],
      alt: 'Slide 1',
      caption: 'Welcome to Slide 1',
    },
    {
      imageUrl: images[1],
      alt: 'Slide 1',
      caption: 'Welcome to Slide 1',
    },
    {
      imageUrl: images[2],
      alt: 'Slide 1',
      caption: 'Welcome to Slide 1',
    },
  ]
  // const SlideComponent = () => {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  
  //   const handleNextSlide = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  //   };
  
  //   const handlePrevSlide = () => {
  //     setCurrentIndex((prevIndex) =>
  //       (prevIndex - 1 + slidesData.length) % slidesData.length
  //     );
  //   };
  
  //   return (
  //     <div className="slide-container">
  //       <button onClick={handlePrevSlide} className="arrow-button left-arrow">
  //         Previous
  //       </button>
  //       <div className="slide">
  //         <img
  //           src={slidesData[currentIndex].imageUrl}
  //           alt={slidesData[currentIndex].alt}
  //         />
  //         <h3>{slidesData[currentIndex].caption}</h3>
  //       </div>
  //       <button onClick={handleNextSlide} className="arrow-button right-arrow">
  //         Next
  //       </button>
  //     </div>
  //   );
  // };
  return (
    <Layout>
      {data.funs.map((fun, i) => (
          <Carousel fun={fun} />
      ))}
      
    </Layout>
  );
};

export default Fun;

