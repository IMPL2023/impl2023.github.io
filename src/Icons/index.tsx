import { FC } from 'react';

interface Props {
  className?: string;
}

export const GitHubIcon: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4998 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9.00001 2.48C6.27001 0.649999 5.09001 0.999999 5.09001 0.999999C4.57638 2.19835 4.54415 3.54851 5.00001 4.77C4.03013 5.7887 3.49253 7.14346 3.50001 8.55C3.50001 13.97 6.80001 15.16 9.94001 15.55C9.61101 15.89 9.35727 16.2954 9.19532 16.7399C9.03336 17.1844 8.96682 17.6581 9.00001 18.13V22M9.00001 19C4.00001 20.5 4.00001 16.5 2.00001 16L9.00001 19Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const VisitIcon: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M15 3H21V9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10 14L21 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const LineSvg: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      {...otherProps}
      fill="none"
      height="2"
      viewBox="0 0 438 2"
      width="438"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H438" stroke="#C7D3FF" />
    </svg>
  );
};
