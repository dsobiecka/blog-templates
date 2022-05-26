import PropTypes from 'prop-types';
import { Wrapper, WhiteBox, DateAdded, ShortDescription, BoxTitle } from './Article.styles';

const Article = (props) => {
  const month = props.data.toLocaleString('en-US', { month: 'long' });
  const year = props.data.getFullYear();
  const day = props.data.toLocaleString('en-US', { day: '2-digit' });

  return (
    <Wrapper className={`box box${props.id}`} style={{ backgroundImage: `url(${props.img})` }}>
      <WhiteBox>
        <DateAdded>
          <div>{day}/{month}/{year}</div>
        </DateAdded>
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
  shortDescription: PropTypes.string
};

export default Article;
