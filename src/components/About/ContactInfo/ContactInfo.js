import PropTypes from 'prop-types';
import { Wrapper, ContactItem } from './ContactInfo.styles';
import { PhoneInTalk, Email, LocationCity } from '@material-ui/icons';

const ContactInfo = () => {
  return (
    <Wrapper>
      <ContactItem>
        <PhoneInTalk className="icon" />
        +34 500 800 900
      </ContactItem>
      <ContactItem>
        <Email className="icon" />
        test@test.com
      </ContactItem>
      <ContactItem>
        <LocationCity className="icon" />
        Chicago, Golden Street 5
      </ContactItem>
    </Wrapper>
  );
};

ContactInfo.propTypes = {};

export default ContactInfo;
