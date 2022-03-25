import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import {Wrapper} from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Navigation />
      <ThemeSwitch />
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
