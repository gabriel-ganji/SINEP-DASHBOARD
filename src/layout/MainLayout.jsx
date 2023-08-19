import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar/Sidebar';
import { TopNav } from '../components/topnav/TopNav';
import '../layout/main-layout.scss';
// import ChangeDarkMode from '../components/ChangeDarkMode/ChangeDarMode';
import { DarkModeContext } from '../context/DarkModeContext';

export const MainLayout = () => {

  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const ChangeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
    <Sidebar onDarkModeToggle={ChangeDarkMode} />
      <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
        <div className="main__content">
          <TopNav darkMode={darkMode}/> {/* Passa a função para o TopNav */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;