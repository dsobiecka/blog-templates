import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRemainingTime } from '../Countdown/Countdown';

const defaultRemainingTime = {
  days: '00',
  hours: '00',
  minutes: '00',
};

const Prefooterlogin = (props, {countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    getRemainingTime(countdown);
  }

  return (
    <ul className="list-inner">
      <div>
        <span>{`${remainingTime.days} days / `}</span>
        <span>{`${remainingTime.hours} hours / `}</span>
        <span>{`${remainingTime.minutes} minutes`}</span>
      </div>

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

export default Prefooterlogin;
