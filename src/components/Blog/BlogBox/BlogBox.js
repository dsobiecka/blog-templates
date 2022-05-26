import PropTypes from 'prop-types';
import { Wrapper, DateAdded, ShortDescription } from './BlogBox.styles';
import { NavLink } from 'react-router-dom';

const BlogBox = (props) => {
  return (
    <NavLink to={`/blogarticles/${props.id}`}>
      <Wrapper className={`box box${props.id}`}>
        <DateAdded>{props.data.toISOString()}</DateAdded>
        <ShortDescription>{props.shortDescription}</ShortDescription>
      </Wrapper>
    </NavLink>
  );
};

BlogBox.propTypes = {
  data: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string
};

export default BlogBox;
