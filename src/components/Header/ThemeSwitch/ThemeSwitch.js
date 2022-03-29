import PropTypes from 'prop-types';
import { SwitchIcon } from './ThemeSwitch.styles';

const ThemeSwitch = (props) => {
  const changeTheme = () => {
    props.onChangeColors();
  };

  return (
    <SwitchIcon>
      <label>
        <input type="checkbox" />
        <span onClick={changeTheme} />
      </label>
    </SwitchIcon>
  );
};

ThemeSwitch.propTypes = {
  onChangeColors: PropTypes.func.isRequired,
};

export default ThemeSwitch;
