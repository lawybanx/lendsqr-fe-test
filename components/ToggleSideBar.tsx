'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function ToggleSideBar() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(prev => !prev);
  };
  return (
    <>
      <Navbar
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
      />
      {toggleSidebar && <Sidebar />}
    </>
  );
}
