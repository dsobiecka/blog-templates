import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import { Wrapper } from './Header.styles';

const Header = (props) => {
  return (
    <Wrapper>
      <Navigation />
      <ThemeSwitch onChangeColors={props.onChangeColors} />
    </Wrapper>
  );
};

Header.propTypes = {
  onChangeColors: PropTypes.func.isRequired,
};

export default Header;
