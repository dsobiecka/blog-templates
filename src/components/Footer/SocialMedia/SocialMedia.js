import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import {Wrapper} from './SocialMedia.styled';

const SocialMedia = () => {
  return (
    <Wrapper>
      <Facebook className="icon" />
      <Instagram className="icon" />
      <LinkedIn className="icon" />
      <Twitter className="icon" />
    </Wrapper>
  );
};

export default SocialMedia;
