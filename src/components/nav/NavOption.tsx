import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { useRouter } from "next/router";
interface INavOption {
  item: {
    name: string;
    href: string;
  };
  number: number;
}

const NavOption: FC<INavOption> = ({ item }) => {
  const router = useRouter();
  return (
    <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-neon">
      <Link
        activeClass="active"
        duration={500}
        onClick={() => router.push(item.href)}
        // href={item.href}
        offset={-100}
        smooth={true}
        spy={true}
        to={item.href}
      >
        {/* <span className="text-neon">{number}. </span> */}
        {item.name}
      </Link>
    </p>
  );
};

export default NavOption;
