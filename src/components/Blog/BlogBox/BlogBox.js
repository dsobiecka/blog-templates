import PropTypes from 'prop-types';
import { Wrapper, DateAdded, ShortDescription } from './BlogBox.styles';
import { Route } from 'react-router-dom';

import BlogArticle from '../BlogArticle/BlogArticle';

const BlogBox = (props) => {
  return (

      <Wrapper className={`box box${props.id}`}>
        <DateAdded>{props.data.toISOString()}</DateAdded>
        <ShortDescription>{props.shortDescription}</ShortDescription>
      </Wrapper>

  );
};

BlogBox.propTypes = {
  data: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string
};

export default BlogBox;
