import Image from 'next/image';
import React, { FC } from 'react';

interface ButtonProps {
  link: string;
  icon: string;
  name: string;
  marginLeft?: string;
}

const ContactButtons: FC<ButtonProps> = ({ link, name, icon, marginLeft }) => {
  return (
    <div>
      <a
        className={`items-center hidden px-5 py-2 mt-10 ${marginLeft} duration-100 border-2 rounded-lg fill-current md:flex border-neon text-neon hover:scale-105`}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <Image alt={name} height={25} src={`/logos/${icon}`} width={25} />
        <span className="ml-2">{name}</span>
      </a>
      <a
        className={`flex items-center mt-10 duration-100 rounded-lg fill-current ${marginLeft} md:hidden text-neon`}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <Image alt={name} height={25} src={`/logos/${icon}`} width={25} />
      </a>
    </div>
  );
};

export default ContactButtons;
