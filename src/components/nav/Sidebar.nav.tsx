import NavOption from './NavOption';
import navOptions from './navOptions';
import { NextComponentType } from 'next';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

const SideBar: NextComponentType = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {!showSidebar && (
        <div
          className="bg-white cursor-pointer md:hidden fixed grid h-14 place-items-center right-10 rounded-full top-4 w-14 z-50"
          onClick={() => setShowSidebar(true)}
        >
          <FiMenu color="black" size="30" />
        </div>
      )}

      <div
        className={`bg-bgblue px-10 flex-col gap-4 flex md:hidden justify-center items-center fixed min-h-[120vh] top-0 right-0 z-50
                    transition-all duration-500 ease-in-out 
                    ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}
      >
        <div
          className="grid bg-white cursor-pointer h-12 absolute place-items-center rounded-full top-4 left-10 w-12"
          onClick={() => setShowSidebar(false)}
        >
          <IoIosClose color="black" size="40" />
        </div>
        <div className="flex flex-col gap-4">
          {navOptions.map((option, i) => (
            <NavOption item={option} key={option.name} number={i + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
