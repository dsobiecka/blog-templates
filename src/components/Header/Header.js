import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import ThemesColors from './ThemesColors/ThemesColors';

const Header = () => {
  return (
    <>
      <Navigation />
      <ThemesColors />
    </>
  );
};

Header.propTypes = {};

export default Header;
