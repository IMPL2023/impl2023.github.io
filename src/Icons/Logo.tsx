import { FC } from 'react';

interface LogoType {
  className?: string;
}

const Logo: FC<LogoType> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="50"
      viewBox="0 0 86 50"
      width="86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Avneesh Agarwal</title>
      <path
        clipRule="evenodd"
        d="M0 50L85.0785 10.3403L39.0052 26.9634L24.8691 0L0 50ZM37.1728 42.801V44.1099H47.1204L44.5026 38.8743L37.1728 42.801ZM24.0838 16.2304L16.7539 34.0314L30.3665 28.534L24.0838 16.2304Z"
        fill="#62EDD1"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Logo;
