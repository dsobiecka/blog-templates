import { Container, PrefooterList } from './Prefooter.styles';
import Prefooterlogin from './PrefooterLogin/PrefooterLogin';

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
        <Prefooterlogin isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      </PrefooterList>
    </Container>
  );
};

export default Prefooter;
