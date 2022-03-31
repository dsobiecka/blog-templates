import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Changer, Closed } from './Navigation.styles';
import { Close, MenuOutlined } from '@material-ui/icons';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const showMenu = () => {
    setActiveMenu(!activeMenu);
    console.log('show menu');
  };

  return (
    <>
      <Nav className={activeMenu ? 'navbar activeNav' : 'navbar'}>
        <ul>
          <Closed>
            <Close className="close" onClick={showMenu} />
          </Closed>
          <li>
            <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={(navData) => (navData.isActive ? 'active' : '')}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
        </ul>
      </Nav>
      <Changer>
        <MenuOutlined className="menu" onClick={showMenu} />
      </Changer>
    </>
  );
};

export default Navigation;
