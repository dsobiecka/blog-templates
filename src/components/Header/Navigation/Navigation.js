import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styles';
import { useState } from 'react';

const Navigation = () => {
  return (
    <Nav>
      <ul>
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
  );
};

export default Navigation;
