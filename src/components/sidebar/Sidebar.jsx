import React, { useEffect, useState } from 'react';
import './sidebar.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import { SidebarNav } from '../../configs/SidebarNav';

export const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const curPath = window.location.pathname.split('/dashboard')[1]
    const activeItem = SidebarNav.findIndex(item => item.section === curPath)

    setActiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [location])

  return <div className='sidebar'>
     <div className='sidebar__logo'>
        <img src={images.singepLogo} alt='' />
      </div>
      <div className="sidebar__menu">
        {
          SidebarNav.map((nav, index) => (
            <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
                  <div className="sidebar__menu__item__icon">
                    {nav.icon}
                  </div>
                  <div className="sidebar__menu__item__txt">
                    {nav.text}
                  </div>
            </Link>
          ))
        }
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className='bx bx-log-out'></i>
          </div>
          <div className="sidebar__menu__item__txt" onClick={() => (navigate("/"))}>
            Sair
          </div>
        </div>
      </div>
    </div>;
};
