import PropTypes from 'prop-types';
import { Wrapper } from './Footer.styles';
import SocialMedia from './SocialMedia/SocialMedia';

const Footer = () => {
  return (
    <Wrapper>
      <SocialMedia />
      <div>some text</div>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
