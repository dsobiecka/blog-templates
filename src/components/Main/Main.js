import PropTypes from 'prop-types';
import { MainTitle, Wrapper, Articles, Row } from './Main.styles';
import Article from './Article/Article';
import Search from './Search/Search';

const SearchHandler = (inputText) => {
  console.log('szukaj z main', inputText);
};

const Main = ({ articles }) => {
  return (
    <Wrapper>
      <Row>
        <MainTitle>Lorem ipsum lorem ipsum</MainTitle>
        <Search onSearch={SearchHandler} />
      </Row>

      <Articles>
        {articles.map((articles) => (
          <Article {...articles} key={articles.id} />
        ))}
      </Articles>
    </Wrapper>
  );
};

Main.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Main;
