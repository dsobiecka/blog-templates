import PropTypes from 'prop-types';
import { Wrapper, WhiteBox, DateAdded, ShortDescription, BoxTitle } from './Article.styles';

const Article = (props) => {
  return (
    <Wrapper className={`box box${props.id}`}>
      <WhiteBox imgUrl={props.img}>
        <DateAdded>{props.data}</DateAdded>
        <BoxTitle>{props.title}</BoxTitle>
        <ShortDescription>{props.shortDescription}</ShortDescription>
      </WhiteBox>
    </Wrapper>
  );
};

Article.propTypes = {
  data: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
};

export default Article;
