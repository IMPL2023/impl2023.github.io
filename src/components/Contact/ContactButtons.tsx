import Image from 'next/image';
import React, { FC } from 'react';
import { GitHubIcon, MailIcon } from '@/Icons';

interface ButtonProps {
  link: string;
  icon: string;
  name: string;
  marginLeft?: string;
}

const ContactButtons: FC<ButtonProps> = ({ link, name, icon, marginLeft }) => {
  const iconClassName = 'h-6 w-6 text-current';

  const renderIcon = () => {
    if (icon === 'github.svg') return <GitHubIcon className={iconClassName} />;
    if (icon === 'mail.svg') return <MailIcon className={iconClassName} />;

    return <Image alt={name} height={25} src={`/logos/${icon}`} width={25} />;
  };

  return (
    <div>
      <a
        className={`items-center hidden px-5 py-2 mt-10 ${marginLeft} duration-100 border-2 rounded-lg fill-current md:flex border-textDark/40 text-text bg-white/70 hover:border-neon hover:bg-neon hover:text-white hover:scale-105`}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        {renderIcon()}
        <span className="ml-2">{name}</span>
      </a>
      <a
        className={`flex items-center mt-10 duration-100 rounded-lg fill-current ${marginLeft} md:hidden text-neon`}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        {renderIcon()}
      </a>
    </div>
  );
};

export default ContactButtons;
