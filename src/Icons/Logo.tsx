import { FC } from 'react';

interface LogoType {
  className?: string;
}

const Logo: FC<LogoType> = ({ className }) => {
  return (
    // <img
    //   className={className}
    //   // height="80"
    //   width="160"
    //   src='logos\IMPL_LOGO.png'
    // >
    // </img>
     <svg
     className={className}
     fill="none"
     height="80"
     viewBox="0 0 86 50"
     width="220"
     xmlns="http://www.w3.org/2000/svg"
   >
     <title>Avneesh Agarwal</title>
     <path
       clipRule="evenodd"
       d="M9.36 40 l-9.36 0 l0 -28.04 l9.36 0 l0 21.8 l-3.12 0 l0 -18.68 l-3.12 0 l0 21.8 l6.24 0 l0 3.12 z M31.672 27.84 l8.96 -15.88 l9.92 0 l0 28.04 l-9.36 0 l0 -10.48 l-5.96 10.48 l-7.16 0 l-9.08 -15.92 l0 -5.88 l10.92 18.68 l3.52 0 l10.88 -18.68 l0 18.68 l3.12 0 l0 -21.8 l-5 0 l-10.84 18.72 l-10.68 -18.72 l-5 0 l0 21.8 l3.08 0 l0 -5.88 l3.12 5.36 l0 3.64 l-9.32 0 l0 -28.04 l9.92 0 z M53.984 11.96 l22.84 0 c4.28 0 7.76 3.48 7.76 7.8 c0 4.28 -3.48 7.8 -7.76 7.8 l-19.72 -0.04 l0 9.36 l3.12 0 l0 -6.24 l3.08 0 l0 9.36 l-9.32 0 l0 -15.6 l22.84 0.04 c2.56 0 4.64 -2.12 4.64 -4.68 c0 -2.6 -2.08 -4.68 -4.64 -4.68 l-19.72 0 l0 3.12 l19.72 0 c0.8 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.56 1.56 l-0.04 0 l-22.72 0 l0 -9.36 z M89.536 15.079999999999998 l0 15.56 l27.64 0 l0 9.36 l-30.76 0 l0 -3.12 l27.68 0 l0 -3.12 l-27.68 0 l0 -21.8 l9.36 0 l0 15.6 l-3.12 0 l0 -12.48 l-3.12 0 z"
       fill="white"
       fillRule="evenodd"
     />
   </svg>
  );
};

export default Logo;
