import { Container, PrefooterList } from './Prefooter.styles';
import { NavLink } from 'react-router-dom';

const Prefooter = (props) => {
  return (
    <Container>
      <PrefooterList>
        <h4>Top articles</h4>
        <ul className="list-inner">
          <li className="nav-item">Lorem Ipsum</li>
          <li className="nav-item">Lorem Ipsum</li>
        </ul>
      </PrefooterList>
      <PrefooterList>
        <h4>Documents</h4>
        <ul className="list-inner">
          <li className="nav-item">Regulations</li>
          <li className="nav-item">Privacy policy</li>
        </ul>
      </PrefooterList>
      <PrefooterList>
        <h4>Admin area</h4>
        <ul className="list-inner">
          {props.onLogout && (
            <li className="nav-item">
              <NavLink to={`/login`}>Login</NavLink>
            </li>
          )}

          {props.isAuthenticated && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </PrefooterList>
    </Container>
  );
};

export default Prefooter;
