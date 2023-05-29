import React, { useState } from 'react';
import './topnav.scss';
import { UserInfo } from '../user-info/UserInfo';
import Sidebar from '../sidebar/Sidebar';
import { data } from '../../constants';

export const TopNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="topnav">
      <UserInfo user={data.user} />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};
