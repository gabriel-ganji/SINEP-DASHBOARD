import React, { useState } from 'react';
import './topnav.scss';
import { UserInfo } from '../user-info/UserInfo';
import { Sidebar } from '../sidebar/Sidebar';
import { data } from '../../constants';
import SidebarNav from '../../configs/SidebarNav';

export const TopNav = ({ darkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="topnav">
      <UserInfo user={data.user} darkMode={darkMode} />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} sidebarNav={SidebarNav} />}
    </div>
  );
};
