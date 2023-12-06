import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Title } from './Common/Title';
export default function Carousel({ fun }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(fun.imgs.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === fun.imgs.length - 1){
      setCurrent(0);
    } 
    else setCurrent(current + 1);
  };

  return (
    <div className="flex justify-center" >
    
    <div className="overflow-hidden relative w-3/5" >
      <div className="m-2">
        <span className="text-neon font-fira text-1xl m-2">{fun.name}</span>
        <span className="text-neon font-fira text-1xl m-2">[{fun.date}]</span> 
      </div>
      
      <div
        className={`flex transition ease-out duration-40 `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {fun.imgs.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {fun.imgs.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-2 h-2 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
