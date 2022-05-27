import PropTypes from 'prop-types';
import { Wrapper, DateAdded, ShortDescription } from './BlogBox.styles';
import { NavLink } from 'react-router-dom';

const BlogBox = (props) => {
  return (
    <Wrapper className={`box box${props.id}`}>
      <DateAdded>{props.data.toISOString()}</DateAdded>
      <ShortDescription>{props.shortDescription}</ShortDescription>
      <NavLink to={`/blogarticles/${props.id}`}>
        <button>...</button>
      </NavLink>
    </Wrapper>
  );
};

BlogBox.propTypes = {
  data: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
};

export default BlogBox;
