import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Prefooterlogin = (props) => {
  return (
    <ul className="list-inner">
      {props.onLogout && (
        <li className="nav-item">
          <NavLink to={`/login`}>Login</NavLink>
        </li>
      )}

      {props.isLoggedIn && (
        <li>
          <button onClick={props.onLogout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

Prefooterlogin.propTypes = {};

export default Prefooterlogin;
