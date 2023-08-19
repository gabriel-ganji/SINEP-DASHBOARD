import React, { useEffect, useState } from 'react';
import './sidebar.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { images } from '../../constants';
import SidebarNav from '../../configs/SidebarNav';

export const Sidebar = ({ onDarkModeToggle }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const SidebarNavegation = SidebarNav();

  useEffect(() => {
    const curPath = window.location.pathname.split('/dashboard')[1];
    const activeItem = SidebarNavegation.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const handleDarkModeToggle = () => {
    onDarkModeToggle(); // Chama a função do pai para ativar o modo escuro
  };
  
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={images.SINGEPQRLOGO} alt="" />
      </div>
      <div className="sidebar__menu">
        {SidebarNavegation.map((nav, index) =>
          nav.darkMode ? (
            <div className="sidebar__menu__item" key={`nav-${index}`}>
              <div className="sidebar__menu__item__icon">
                <button onClick={handleDarkModeToggle}>
                  {nav.icon}
                </button>
              </div>
              <div className="sidebar__menu__item__txt">
                {nav.text}
              </div>
            </div>
          ) : (
            <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`sidebar__menu__item ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div className="sidebar__menu__item__icon">
                {nav.icon}
              </div>
              <div className="sidebar__menu__item__txt">
                {nav.text}
              </div>
            </Link>
          )
        )}
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div
            className="sidebar__menu__item__txt"
            onClick={() => navigate('/')}
          >
            Sair
          </div>
        </div>
      </div>
    </div>
  );
};
