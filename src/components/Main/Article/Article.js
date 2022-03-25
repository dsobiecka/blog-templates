import PropTypes from 'prop-types';
import { Wrapper, WhiteBox, DateAdded, ShortDescription } from './Article.styles';
import { MainTitle } from '../Main.styles';

const Article = (props) => {
  return (
    <Wrapper className={`box box${props.id}`}>
      <WhiteBox>
        <DateAdded>{props.data}</DateAdded>
        <MainTitle>{props.title}</MainTitle>
        <ShortDescription>{props.shortDescription}</ShortDescription>
      </WhiteBox>
    </Wrapper>
  );
};

Article.propTypes = {};

export default Article;
