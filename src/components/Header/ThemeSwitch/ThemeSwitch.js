import PropTypes from 'prop-types';
import icon from '../../../assets/icons/sun_moon.svg';
import { SwitchIcon } from './ThemeSwitch.styles';

const ThemeSwitch = () => {
  return (
    <SwitchIcon>
      <div>
        <img src={icon} alt="sun_and_moon" />
      </div>
    </SwitchIcon>
  );
};

ThemeSwitch.propTypes = {};

export default ThemeSwitch;
