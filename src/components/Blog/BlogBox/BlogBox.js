import PropTypes from 'prop-types';
import { Wrapper, DateAdded, ShortDescription } from './BlogBox.styles';
import { Route } from 'react-router-dom';
import Blog from '../Blog';
import { articles } from '../../../data/articles';

const BlogBox = (props) => {
  return (
    <Route path='/blog/:id'>
      <Wrapper className={`box box${props.id}`}>
        <DateAdded>{props.data.toISOString()}</DateAdded>
        <ShortDescription>{props.shortDescription}</ShortDescription>
      </Wrapper>
    </Route>
  );
};

BlogBox.propTypes = {
  data: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string
};

export default BlogBox;
