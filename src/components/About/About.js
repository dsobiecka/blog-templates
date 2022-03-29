import PropTypes from 'prop-types';
import mountain from '../../assets/img/mountain.jpg';
import { Wrapper, Container } from './About.styles';
import { MainTitle } from '../Main/Main.styles';
import ContactForm from './ContactForm/ContactForm';
import ContactInfo from './ContactInfo/ContactInfo';

const About = () => {
  return (
    <Wrapper>
      <Container>
        <img src={mountain} alt="mountain" />
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </Container>
      <MainTitle>Let's stay in contact</MainTitle>
      <Container>
        <ContactForm />
        <ContactInfo />
      </Container>
    </Wrapper>
  );
};

About.propTypes = {};

export default About;
