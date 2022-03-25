import PropTypes from 'prop-types';
import { MainTitle, Wrapper, Articles } from './Main.styles';
import Article from './Article/Article';

const Main = ({ articles }) => {
  return (
    <Wrapper>
      <MainTitle>Lorem ipsum lorem ipsum</MainTitle>
      <Articles>
        {articles.map((articles) => (
          <Article {...articles} key={articles.id} />
        ))}
      </Articles>
    </Wrapper>
  );
};

Main.propTypes = {};

export default Main;
