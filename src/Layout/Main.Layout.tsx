import { Header } from '@/components/nav';
import SideBar from '@/components/nav/Sidebar.nav';
import React, { FC } from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}
const zindex ={
  "z-index": '-99'
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start mb-10 w-full">
        <div style={{zIndex:'-99'}}><div className="w-100 h-30 rounded-full bg-bgwhite fixed mx-auto my-auto blur-xl inset-0 opacity-5" /></div>
        {children}
      </div>
    </>
  );
};

export default Layout;
